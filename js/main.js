var homeSlider = document.getElementById("home-slider");
var settingSlider = document.getElementById("setting-slider");
var contactSlider = document.getElementById("contact-slider");
var navBack = document.getElementById("nav-right");
var navFarBack = document.getElementById("nav-right-back");
var hider = document.getElementById("hider");
var end = document.getElementById('end-of-page');
var textarea = document.querySelector('textarea');
var education = document.getElementsByClassName("education")[0];
var pastprojects = document.getElementsByClassName("past-projects")[0];
var work = document.getElementsByClassName("work")[0];
var personal = document.getElementsByClassName("personal-work")[0];

show_hide_main();
diagonalDiv();
galleryDarkener();

textarea.addEventListener('keydown', autosize);

//Add/ Removes active class based on click
homeSlider.onclick = function (e) {
    add_remove_active(homeSlider, settingSlider, contactSlider)
};
settingSlider.onclick = function (e) {
    add_remove_active(settingSlider, homeSlider, contactSlider)
};
contactSlider.onclick = function (e) {
    add_remove_active(contactSlider, homeSlider, settingSlider)
};


//Changes state of nav show hide
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

// A messy slider function - takes in our out status
function slider(out_or_in) {
    if (homeSlider.classList.contains("active")) {
        homeSlider.setAttribute("class", "active home-btn animated " + out_or_in + " fast");
    } else {
        homeSlider.setAttribute("class", "home-btn animated " + out_or_in + " fast");
    }
    if (settingSlider.classList.contains("active")) {
        settingSlider.setAttribute("class", "active animated noZensmooth " + out_or_in + " fast");
    } else {
        settingSlider.setAttribute("class", "animated noZensmooth " + out_or_in + " fast");
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

//removes or adds active class
function add_remove_active(arg1, arg2, arg3) {
    arg1.classList.add("active");
    arg2.classList.remove("active");
    arg3.classList.remove("active");
}


// determines scrolled part of page. adds or removes classes according to position of scrolled page
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
window.addEventListener('resize', function () {
    diagonalDiv();
}, false);



//show and hides the main elements based on list click - !in progress
function show_hide_main() {

    var listElements = document.getElementsByTagName("li");
    var uq = listElements[0];
    var kenmore = listElements[1];
    var tutortext = listElements[2];
    var free = listElements[3];
    var ato = listElements[4];
    var liq = listElements[5];
    var peer = listElements[7];
    var hello = listElements[8];
    var rack = listElements[9];

    uq.onclick = function (e) {
        hiding_all_but_me(education, uq, 1);
    }
    kenmore.onclick = function (e) {
        hiding_all_but_me(education, kenmore , 2);
    }
    tutortext.onclick = function (e) {
        hiding_all_but_me(work, tutortext, 3);
    }
    free.onclick = function (e) {
        hiding_all_but_me(work, free, 4);
    }
    ato.onclick = function (e) {
        hiding_all_but_me(work, ato, 5);
    }
    liq.onclick = function (e) {
        hiding_all_but_me(work, liq, 6);
    }
    peer.onclick = function (e) {
        hiding_all_but_me(pastprojects, peer, 8);
    }
    hello.onclick = function (e) {
        hiding_all_but_me(pastprojects, hello, 9);
    }
    rack.onclick = function (e) {
        hiding_all_but_me(pastprojects, rack, 10);
    }

}

//Makes the gallery opacity lower on mouse over
function galleryDarkener() {
    var gallery = document.getElementsByClassName("gallery");
    var grab_link = document.getElementsByClassName("op");


    grab_link[0].onmouseover = function (e) {
        gallery[0].setAttribute("class", "gallery gallery-dark");
    }

    grab_link[0].onmouseout = function (e) {
        gallery[0].setAttribute("class", "gallery");
    }
}

//Autosizing the text area for messages
function autosize() {
    var el = this;
    setTimeout(function () {
        el.style.cssText = 'height:50%; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}


// hides everything but the selected div. I will optimze this later i swear
function hiding_all_but_me(me, clicked, num){
    var workinfo = document.getElementById("work-expand");
    var uqdetails = document.getElementById("uq-expand");
    var tutorinfo = document.getElementById("free-expand");
    var atoinfo = document.getElementById("ato-expand");
    var liquorinfo = document.getElementById("liquor-expand");
    var helloinfo = document.getElementById("hello-expand");
    var rackinfo = document.getElementById("rack-expand");
    var peerinfo = document.getElementById("peer-expand");
    var content = document.getElementsByClassName("content");
    console.log(content);


    if(me === education){
        clicked.classList.toggle("active-selection");
        work.classList.toggle("hide-them-all");
        pastprojects.classList.toggle("hide-them-all");
        personal.classList.toggle("hide-them-all");
        uqdetails.classList.toggle("show");
        workinfo.classList.toggle("hide-them-all");
    } 
    if(me == work){
        education.classList.toggle("hide-them-all");
        pastprojects.classList.toggle("hide-them-all");
        personal.classList.toggle("hide-them-all");
        
        if(num == 3){
            workinfo.classList.toggle("show");
            clicked.classList.toggle("active-selection");
            toggle_for_me(3,4,5);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
           
        }
        if(num == 4){
            tutorinfo.classList.toggle("show");
            clicked.classList.toggle("active-selection");
            toggle_for_me(2,4,5);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        if(num == 5){
            atoinfo.classList.toggle("show");
            clicked.classList.toggle("active-selection");
            toggle_for_me(3,2,5);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        if(num == 6){
            liquorinfo.classList.toggle("show");
            clicked.classList.toggle("active-selection");
            toggle_for_me(2,4,3);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

    }
    if(me == pastprojects){
        content[0].classList.toggle("remove-left");
        work.classList.toggle("hide-them-all");
        personal.classList.toggle("hide-them-all");
        education.classList.toggle("hide-them-all");
        
        if(num == 8){
            peerinfo.classList.toggle("show");
            clicked.classList.toggle("active-selection");
            toggle_for_me(6,9,8); 
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        if(num == 9){
            helloinfo.classList.toggle("show");
            clicked.classList.toggle("active-selection");
            toggle_for_me(9,6,7);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            
        }
        if(num == 10){
            rackinfo.classList.toggle("show");
            clicked.classList.toggle("active-selection");
            toggle_for_me(7,6,8);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
    
}

//helper so that i don't repeat myself even though there are better ways of doing this. 
function toggle_for_me(i,j,k){
    var listElements = document.getElementsByTagName("li");
    listElements[i].classList.toggle("hide-them-all");
    listElements[j].classList.toggle("hide-them-all");
    listElements[k].classList.toggle("hide-them-all");
}

//checks if the device is mobile
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

//creates a uniform left margin-left on all elements on the mainpage, reverses this for mobile.
function diagonalDiv() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var searchEles = document.getElementsByTagName("li");
    if (viewportWidth >= 1749) {
        for (var i = 0; i < searchEles.length; i++) {
            searchEles[i].style.marginLeft = i * 0.6 + "em";
        }

    } else {
        for (var i = 0; i < searchEles.length; i++) {
            searchEles[i].style.marginLeft = 0 + "em";
        }
    }
}


// Adding play animation to header after given time
setTimeout(function () {
    document.getElementById("animation2").classList.add('playit');
}, 1000);