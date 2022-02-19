/* Dark Mode */
function DarkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   document.cookie = "darkmode=true";

   if(element.classList.contains("dark-mode")){
   	document.cookie = "darkmode=true";
   } else {
   	document.cookie = "darkmode=false";
   }
}
 
/* Needs work */
function CheckDarkMode(){
	var element = document.body;
	var DarkMode = getCookie("darkmode");
	if (DarkMode == "true") {
	   element.classList.toggle("dark-mode");
	} 
}

function openSideNav() {
  document.getElementById("Sidenav").style.width = "230px";
}

function closeSideNav() {
  document.getElementById("Sidenav").style.width = "0";
}

function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}

//Aniamted Scroling

// to top right away
if ( window.location.hash ) scroll(0,0);
// void some browsers issue
setTimeout( function() { scroll(0,0); }, 1);

$(function() {

    // your current click function
    $('.scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, 1000, 'swing');
    });

    // *only* if we have anchor on the url
    if(window.location.hash) {

        // smooth scroll to the anchor id
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top + 'px'
        }, 1000, 'swing');
    }

});

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});