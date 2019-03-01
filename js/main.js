

function myFunction() {
    var navBack = document.getElementById("nav-right");
    var navFarBack = document.getElementById("nav-right-back");
    var homeSlider = document.getElementById("home-slider");
    var settingSlider = document.getElementById("setting-slider");
    var contactSlider = document.getElementById("contact-slider");
    var hider = document.getElementById("hider");

    if (homeSlider.className == "active home-btn animated slideOutRight fast") {
        homeSlider.setAttribute("class", "active home-btn animated slideInRight fast");
        settingSlider.setAttribute("class", "animated slideInRight fast");
        contactSlider.setAttribute("class", "animated slideInRight fast");
        navBack.setAttribute("class", "nav-right animated slideInRight fast");
        navFarBack.setAttribute("class", "nav-right-back animated slideInRight fast");
        hider.removeAttribute("class");
        hider.offsetHeight;
        hider.textContent = "-";
        hider.classList.add("animated",  "jackInTheBox");
    } else {
        homeSlider.setAttribute("class", "active home-btn animated slideOutRight fast");
        settingSlider.setAttribute("class", "animated slideOutRight fast");
        contactSlider.setAttribute("class", "animated slideOutRight fast");
        navBack.setAttribute("class", "nav-right animated slideOutRight fast");
        navFarBack.setAttribute("class", "nav-right-back animated slideOutRight");
        hider.removeAttribute("class");
        hider.offsetHeight;
        hider.setAttribute("class", "changed animated jackInTheBox");
        hider.textContent = "+";
    }
    event.preventDefault();
}

setTimeout(function() {
    document.getElementById("animation2").classList.add('playit');
  }, 1000);





