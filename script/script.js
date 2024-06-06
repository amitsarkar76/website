const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
window.addEventListener("load", function() {
  // Select the preloader element
  var preloader = document.getElementById("loop");
  // Select the bike wrapper element
  var bikeWrapper = document.getElementById("bike-wrapper");

  // Add a delay before hiding the elements (e.g., 1000 milliseconds = 1 second)
  setTimeout(function() {
      // Hide the preloader
      preloader.style.display = "none";
      // Hide the bike wrapper
      bikeWrapper.style.display = "none";
  }, 2900); // Adjust the delay time as needed
});
