(function() {

  // The gQuery function that creates gQuery objects.  The value
  // returned should be a gQuery object.
  // The qQuery function should be able to handle 3 different types of
  // of values being passed at the param:
  // 1. A string which defines the selector to execute on the dom
  //    and returns dom elements that will be saved as a gQuery obj.
  // 2. An instance of HTMLElement.  Since the object has already been
  //    found, no query selector is needed, just return a gQuery object
  //    with the element saved in an array.
  // 3. Something that looks like an array (It must have a lenght and
  //    the length is greater than 0).  The the param looks like an array,
  //    assume that you are being passed an array of HTMLElements.  Simply
  //    add that array as a parameter to the gQuery object.
  var gQuery = function(param) {
  }

  // A gQuery object will keep track of the selector used to find the
  // elements and the elements that were found.
  function gQueryObj(selector, elements) {
  }

  // Gets the value of a css property if the value is not specified
  // Otherwise, sets the value of the specified property.
  // The get computed style method might be useful here:
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  // The css method should support chainging.  In other words,
  // the gQuery object should be returned when a property is set.
  gQueryObj.prototype.css = function(property, value) {
  };

  // Gets the html of the first element in the list of elements
  // if not htmlString is specified.  If an html string is specified,
  // set the html to each elements inner html.
  // Also support chaining.
  gQuery.prototype.html = function(htmlString) {
  };

  // TODO: BONUS!!
  //BONUS: Implement the attr() method.

  window.gQuery = gQuery;
  window.$ = window.gQuery;
})();

