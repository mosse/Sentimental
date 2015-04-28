var AppView = Backbone.View.extend({

// var chart = new ChartModel({keywords: ['BP'], sources: ['New York Times']});
      // var app = new AppModel({chart: chart});

  // events: {
  //   "chartRender": function() {
  //     console.log('We are trying to render the chart');
  //   }
  // },


  initialize: function(params){
    this.topNavView = new TopNavView();
    this.chart = new ChartModel({keywords: ['BP'], sources: ['New York Times']});
    this.subBarView = new SubBarView();
    this.jumbotronView = new JumbotronView();
    this.landingParaView = new LandingParaView();
    this.footerView = new FooterView();

    this.landingParaView.on('chartRender', function(){
      console.log("we made it");
      this.rerender();
    }, this)
  },

  render: function(){
    return this.$el.html([
      this.topNavView.$el,
      this.jumbotronView.$el,
      this.landingParaView.$el,
      this.footerView.$el
    ]);
  },

  rerender: function(){
    this.chartView = new ChartView({model: this.chart});
    return this.$el.html([
      this.topNavView.$el,
      this.subBarView.$el,
      this.chartView.$el,
      this.footerView.$el
    ]);
  }

});