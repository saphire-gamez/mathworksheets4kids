
if ($(window).width() >=800 ) {	
window.onscroll = function() {myFunctionnew()};

var header = document.getElementById("myTopnav");
var sticky = header.offsetTop;


function myFunctionnew() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
 
} 
}
//});
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


