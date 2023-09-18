/*function myFunction() {
    document.getElementsById("container").style.display = "none";
  }*/
  
  var myButton = document.getElementById('btn');
  myButton.addEventListener('click', myFunction);
  var hide = true;
  
  function myFunction() {
    if (hide) {
      var container = document.getElementById("container");
      container.style.display = "none";
    } else {
      var state = document.getElementById("state");
      state.style.display = "block";
    }
    
    hide = !hide; // Toggle the show variable
  }

// Select the circle elements
var circleElements = document.querySelectorAll('.rate-number .circle');

// Add event listeners to each circle element
circleElements.forEach(function(circle) {
  circle.addEventListener('click', function() {
    var ratingValue = circle.innerHTML.trim();
    document.getElementById('rating-value').textContent = ratingValue;
  });
});


  