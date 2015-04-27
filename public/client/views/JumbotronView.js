var JumbotronView = Backbone.View.extend({
  
  tagName: 'div class="jumbotron"',

  initialize: function() {
    this.render();
  },

  template: _.template('<h1>SENTIMENTAL</h1>'),

  render: function(){
    return this.$el.html(this.template());
  }
})