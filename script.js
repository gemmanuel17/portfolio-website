/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerMenu() {
    var x = document.getElementById("nav-options");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        }
    }