// Will render a single line onto a multi-line chart

var QueryView = Backbone.View.extend({

  initialize: function(params) {
    this.parent = params.chartOptions.parentEl;
    this.lineGen = params.chartOptions.lineGen;
    this.xMap = params.chartOptions.xMap;
    this.yMap = params.chartOptions.yMap;
  }, 
 
  render: function() {
    this.svgPath = this.parent.append('svg:path');
    this.model.on('change:responseData', this.displayData, this);
    this.model.queryServer();
  },

  displayData: function() {

    this.model.handleResponseData();
    
    this.svgPath.attr('d', this.lineGen(this.model.get('summaryDataPoints')))
      .attr('stroke', this.model.get('color'))
      .attr('stroke-width', 0)
      .attr('fill', 'none')
      .on("mouseover", function(d){
        d3.select(this).transition()
          .attr("stroke-width", 6)
          .style("opacity", .5);
      })
      .on("mouseout", function(d){
        d3.select(this).transition()
          .attr("stroke-width", 2)
          .style("opacity", 1);
      });

    this.svgPath.transition().duration(2000).attr('stroke-width', 2);

    this.displayDots();
  },

  displayDots: function() {

    var tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 1);

    var dataPoint = this.parent.selectAll(".dot");
    var dataPoints = dataPoint.data(this.model.get('articles'));

    dataPoints.enter().append("circle")
      .attr("class", "dot")
      .attr("r", 0)
      .attr("cx", this.xMap)
      .attr("cy", this.yMap)
      .attr("opacity", .1)
      .style("fill", this.model.get('color'))
      .html(function(d){

      })
      .on("click", function(d){
        window.open(d["url"]);
      })
      .on("mouseover", function(d, i) {
        tooltip.transition()
          .duration(200)
          .style("opacity", .8);
        // Add in popup data for each rendered dot represeting an article.
        tooltip.html("<div>" + d.displayDate + "</div><div>" + d.headline +"</div><div>Sentiment score: " + d.sentiment + "</div>")
          .style("text-align", "left")
          .style("left", (d3.event.pageX + 5) + "px")
          .style("top", (d3.event.pageY - 58) + "px");

        d3.select(this).transition()
          .attr("r", 10)
          .style("opacity", .5)
          .attr("cursor", "pointer"); 

      })
      .on("mouseout", function(d) {
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
        d3.select(this).transition()
          .attr("r", 4)
          .style("opacity", .1);
        });

    dataPoints.transition().duration(1500).attr("r", 4);

  }

});