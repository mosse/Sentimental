var Router = Backbone.Router.extend({

  routes: { 
    // "": "default",
    "home": "home",
    "stories/:story": "stories",
    "about": "about",
    "sandbox": "sandbox"
  }

});

var router = new Router();

router.on('route:about', function(){
  var aboutUsView = new AboutUsView();
  $('body').append(aboutUsView.render());
  console.log("this should be about us.")
});

Backbone.history.start();

