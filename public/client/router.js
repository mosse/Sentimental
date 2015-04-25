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

router.on('route:home', function(){
  console.log("we are here");
});

Backbone.history.start();

