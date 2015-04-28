var LandingParaView = Backbone.View.extend({
  
  tagName: 'div class="landingpara"',

  initialize: function() {
    this.render();
  },

  events: {
    "click #stories": "storiesClick"
  },

  template: _.template('<div class="blurb"><h3>Measuring Sentiment in the Mainstream Media or Whatevs</h3><p>8-bit Marfa semiotics, PBR&B distillery fanny pack seitan typewriter Brooklyn authentic Schlitz single-origin coffee mixtape keytar. Shoreditch jean shorts photo booth shabby chic, farm-to-table viral McSweeney\'s twee tofu. PBRB bicycle rights slowcarb letterpress Bushwick wayfarers. Cold-pressed direct trade cray, fap polaroid biodiesel yr Marfa. Tofu heirloom leggings, wolf XOXO fanny pack Helvetica Tumblr fap seitan. Kale chips bicycle rights gentrify, lumbersexual blog literally tattooed hella Austin semiotics paleo sustainable cold-pressed Banksy migas. Pickled Carles slowcarb listicle typewriter trust fund.</p><p><a class="btn btn-primary btn-lg"  id="stories" href="#" role="button">Check out the stories</a></p></div><div class="forkrequest"><h4>Find out more. Or fork us.</h4><p>Trust fund Portland kale chips, ugh you probably haven\'t heard of them mustache irony organic cardigan freegan Shoreditch bitters Carles.</p><p><a class="btn btn-primary btn-sm" href="https://github.com/OptiBots/Sentimental" role="button">Fork the repo</a></p></div>'),

  render: function(){
    return this.$el.html(this.template());
  },

  storiesClick: function() {
    this.trigger('chartRender');
  }
})