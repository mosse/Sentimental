var TopNavView = Backbone.View.extend({
  
  tagName: 'div',

  initialize: function() {
    this.render();
  },

  template: _.template('<nav class="navbar navbar-default navbar-fixed-top topNav"><div class="container"><div class="navbar-header"><a class="navbar-brand" href="#/home">SENTIMENTAL</a></div><p class="navbar-text navbar-right"><a href="#" class="navbar-link">Sandbox</a></p><p class="navbar-text navbar-right"><a href="#/about" class="navbar-link">About Us</a></p><p class="navbar-text navbar-right"><a href="#" class="navbar-link">Stories</a></p></div></nav>'),

  render: function(){
    return this.$el.html(this.template());
  }
})