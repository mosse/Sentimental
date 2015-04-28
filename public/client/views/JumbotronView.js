var JumbotronView = Backbone.View.extend({
  
  tagName: 'div class="jumbotron"',

  initialize: function() {
    this.render();
  },

  template: _.template('<h1>SENTIMENTAL</h1><p>_____________________</p><h3>Space for a Tagline Because Ya Know</h3>'),

  render: function(){
    return this.$el.html(this.template());
  }
})