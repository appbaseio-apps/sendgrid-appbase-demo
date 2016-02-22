$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'              : $('input[name=fullname]').val(),
            'email'             : $('input[name=email]').val(),
            'country'    : $('#country option:selected').text()
        };

        console.log(formData)
});