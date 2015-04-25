var AboutUsView = Backbone.View.extend({

  initialize: function(params){
    this.topNavView = new TopNavView();
    // this.subBarView = new SubBarView();
    // this.chartView = new ChartView({model: this.model.get('chart')});
    this.footerView = new FooterView();
    // router.route('about', 'about');
    // console.log(router);
  },

  render: function(){
    return this.$el.html([
      this.topNavView.$el,
      // this.subBarView.$el,
      // this.chartView.$el,
      this.footerView.$el
    ]);
  }

});