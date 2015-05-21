(function() {

  // The gQuery function that creates gQuery objects.  The value
  // returned should be a gQuery object.
  var gQuery = function(selector) {
  }

  // A gQuery object will keep track of the selector used to find the
  // elements and the elements that were found.
  function gQueryObj(selector, elements) {
  }

  // Gets the value of a css property if the value is not specified
  // Otherwise, sets the value of the specified property.
  gQueryObj.prototype.css = function(property, value) {
  };

  // Gets the html of the first element in the list of elements
  // if not htmlString is specified.  If an html string is specified,
  // set the html to each elements inner html.
  gQuery.prototype.html = function(htmlString) {
  };

  //Implement the attr() method.

  window.gQuery = gQuery;
  window.$ = window.gQuery;
})();

