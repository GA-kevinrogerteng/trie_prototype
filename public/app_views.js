App.Views.Main = Backbone.View.extend({
  id: "search-stuff",
  
  events: {
    "keyup #search-something":    "search",
  },

  render: function(){
    this.$el.html("<input id='search-something' type='text' placeholder='Whats to Search?'>");
    this.$el.append("<ul id='foundWord'></ul>");
    return this;
  },

  search: function(event){
    $("#foundWord").empty();
    var currentSearch = $('#search-something').val();
    var searchedStuff = App.Autocompleter.complete(currentSearch);

    if (currentSearch.length > 0){
      searchedStuff.forEach(function(stuff){
      $("#foundWord").append("<li>"+ stuff + "</li>");
    });
      //courtesy of steve marsh
   }
  },

});