$('#page-loaded').html( (new Date).toLocaleTimeString() );

$('form input[type="submit"]').click(sendForm);

function sendForm(e) {
    const form = $('form')[0];
    if (!form.checkValidity()) {
        return;
    }
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/ekaterinatokarenko777@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            email address: $('#email').val(),
            phone number: $('#phone').val(),
            comment: $('#comment').val()
        },
        dataType: "json"
    })
    .done(function(){
        $('form')[0].reset();
        $('#msg').html('Thank you!');
    })
    .fail(function(){
        $('#msg').html('Sorry, there is an error!');
    });
}