window.onload = function () {

    var form = document.getElementsByTagName("form");

    // create the pristine instance
    var pristine = new Pristine(form);

    form[1].addEventListener('submit', function (e) {
        e.preventDefault();

        // check if the form is valid
        var valid = pristine.validate(); // returns true or false

    });
};