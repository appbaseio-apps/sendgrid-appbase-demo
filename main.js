$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name': $('input[name=fullname]').val(),
            'email': $('input[name=email]').val(),
            'country': $('#country option:selected').text()
        };

        console.log(formData)
        var appbaseRef = new Appbase({
            url: 'https://scalr.api.appbase.io',
            appname: 'sendgrid-demo',
            username: '7uPL4Tlo4',
            password: '56608bae-0b5d-4f65-ac86-da09d4c60923'
        });

        appbaseRef.index({
            type: 'user',
            body: formData
        }).on('data', function(response) {
            console.log(response);
        }).on('error', function(error) {
            console.log(error);
        });

        $('.container').html('<h2 class="notification"> The data has been inserted into Appbase and webhook for sending mail through sendgrid has been fired</h2>')

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    })
})