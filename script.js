/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerMenu() {
    var a = document.getElementById("hamburger-menu");
    var b = document.getElementById("close-menu");
    var x = document.getElementById("nav-options");
    var y = document.getElementById("nav-button");
    if ((x.style.display == "block") && (y.style.display == "block")) {
        x.style.display = "none";
        y.style.display = "none";
        a.style.display = "block";
        b.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "block";
        a.style.display = "none";
        b.style.display = "block";
        }
}