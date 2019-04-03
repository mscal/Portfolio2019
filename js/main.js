var homeSlider = document.getElementById("home-slider");
var settingSlider = document.getElementById("setting-slider");
var contactSlider = document.getElementById("contact-slider");
var navBack = document.getElementById("nav-right");
var navFarBack = document.getElementById("nav-right-back");
var hider = document.getElementById("hider");
var end = document.getElementById('end-of-page');



homeSlider.onclick = function (e) {
    add_remove_active(homeSlider, settingSlider, contactSlider)
};
settingSlider.onclick = function (e) {
    add_remove_active(settingSlider, homeSlider, contactSlider)
};
contactSlider.onclick = function (e) {
    add_remove_active(contactSlider, homeSlider, settingSlider)
};

function myFunction() {
    if (homeSlider.classList.contains("slideOutRight")) {
        slider("slideInRight");
        hider.textContent = "-";
        hider.classList.add("animated", "jackInTheBox");
    } else {
        slider("slideOutRight");
        hider.setAttribute("class", "changed animated jackInTheBox");
        hider.textContent = "+";

    }
    event.preventDefault();
}

function slider(out_or_in) {
    if (homeSlider.classList.contains("active")) {
        homeSlider.setAttribute("class", "active home-btn animated " + out_or_in + " fast");
    } else {
        homeSlider.setAttribute("class", "home-btn animated " + out_or_in + " fast");
    }
    if (settingSlider.classList.contains("active")) {
        settingSlider.setAttribute("class", "active animated " + out_or_in + " fast");
    } else {
        settingSlider.setAttribute("class", "animated " + out_or_in + " fast");
    }
    if (contactSlider.classList.contains("active")) {
        contactSlider.setAttribute("class", "active animated " + out_or_in + " fast");
    } else {
        contactSlider.setAttribute("class", "animated " + out_or_in + " fast");
    }
    navBack.setAttribute("class", "nav-right animated " + out_or_in + " fast");

    if (out_or_in == "slideOutRight") {
        navFarBack.setAttribute("class", "nav-right-back animated " + out_or_in);
    } else {
        navFarBack.setAttribute("class", "nav-right-back animated " + out_or_in + " fast");
    }

    hider.removeAttribute("class");
    hider.offsetHeight;
}

function add_remove_active(arg1, arg2, arg3) {
    arg1.classList.add("active");
    arg2.classList.remove("active");
    arg3.classList.remove("active");
}

window.onwheel = function scrollNavActive() {
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    if (scrollPosY > 1100) {
        add_remove_active(contactSlider, homeSlider, settingSlider);
    } else if (scrollPosY > 400 || scrollPosY >= 800) {
        add_remove_active(settingSlider, contactSlider, homeSlider);
    } else if (scrollPosY <= 100) {
        add_remove_active(homeSlider, contactSlider, settingSlider);
    }
}

var tutoring = document.getElementById("tutoring");
tutoring.onclick = function (e) {
    hideDiv()
};

diagonalDiv();

window.addEventListener('resize', function () {
    diagonalDiv();
}, false);


var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);

function autosize() {
    var el = this;
    setTimeout(function () {
        el.style.cssText = 'height:50%; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}


function hideDiv() {
    var education = document.getElementsByClassName("education")[0];
    var work = document.getElementsByClassName("past-projects")[0];
    var personal = document.getElementsByClassName("personal-work")[0];
    var workinfo = document.getElementById("work-expand");

    workinfo.classList.toggle("show");
    education.classList.toggle("hide-them-all");
    tutoring.classList.toggle("active-selection");
    work.classList.toggle("hide-them-all");
    personal.classList.toggle("hide-them-all");
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function diagonalDiv() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var searchEles = document.getElementsByTagName("li");
    if(viewportWidth >= 1749){
        for (var i = 0; i < searchEles.length; i++) {
            searchEles[i].style.marginLeft = i * 0.6 + "em";
        }
    }else{
        for (var i = 0; i < searchEles.length; i++) {
            searchEles[i].style.marginLeft = 0 + "em";
        }
    }
}



setTimeout(function () {
    document.getElementById("animation2").classList.add('playit');
}, 1000);