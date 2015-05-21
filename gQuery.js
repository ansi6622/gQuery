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
    var obj;
    if (typeof param === "string") {
      var elements = document.querySelectorAll(param);
      obj = new gQueryObj(param, elements);
    } else if (param instanceof HTMLElement) {
      obj = new gQueryObj("", [param]);
    } else if (param instanceof NodeList) {
      obj = new gQueryObj("", param);
    }
    return obj;
  }

  // A gQuery object will keep track of the selector used to find the
  // elements and the elements that were found.
  function gQueryObj(selector, elements) {
    this.selector = selector;
    this.elements = elements;
    this.version = "0.1";
  }

  // Gets the value of a css property if the value is not specified
  // Otherwise, sets the value of the specified property.
  gQueryObj.prototype.css = function(property, value) {
    if (value === undefined || value === null) {
      //Return the first property that matches
      if (this.elements && this.elements.length >= 1) {
        var first = this.elements[0];
        var style = window.getComputedStyle(first).getPropertyValue(property);
        return style;
      }
    } else {
      // Set all properties to the given value
      if (this.elements) {
        for (var i = 0; i < this.elements.length; i++) {
          this.elements[i].style[property] = value; 
        }
      }
    }
   
    return this;
  };

  // Gets the html of the first element in the list of elements
  // if not htmlString is specified.  If an html string is specified,
  // set the html to each elements inner html.
  gQueryObj.prototype.html = function(htmlString) {
    if (htmlString === undefined || htmlString === null) {
      if (this.elements && this.elements.length >= 1) {
        return this.elements[0].innerHTML;
      }
    } else {
      if (this.elements) {
        for (var i = 0; i < this.elements.length; i++) {
          this.elements[i].innerHTML = htmlString;
        }
      }
    } 
  };

  window.gQuery = gQuery;
  window.$ = window.gQuery;
})();

