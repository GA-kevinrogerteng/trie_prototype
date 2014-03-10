App.Routers.Main = Backbone.Router.extend({
    routes: {
      "": "main",
    },

    main: function(){
      var view = new App.Views.Main();
      $("#container").html(view.render().el);
    }
  });