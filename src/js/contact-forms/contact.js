


    if( !!document.getElementById('contact-form') ){
        // formulario de contacto
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        if(document.getElementById('contact-form').querySelector('.checkbox__input').checked === false ){
            if( document.querySelector('.js-banner').classList.contains('banner--correct')){
                document.querySelector('.js-banner').classList.remove('banner--correct')
            }
            document.querySelector('.js-banner').classList.add('banner--error');
            document.querySelector('.js-banner').classList.add('banner--active');
            document.querySelector('.js-banner').querySelector('.js-banner-text').innerHTML =  'Tienes que aceptar la pólitica de privacidad';
            return false;
        }

        var formContact = document.getElementById('contact-form');
        var data = {
            service_id: 'service_hgrui62',
            template_id: 'template_ola5fyk',
            user_id: 'user_Telqa5mrfZjsFQNSLAZXh',
            template_params: {
                'username': capitalizeString(formContact.querySelector('input[name=nombre]').value.toString()),
                'usersurname': formContact.querySelector('input[name=apellidos]').value.toString(),
                'email': formContact.querySelector('input[name=email]').value.toString(),
                'phone': formContact.querySelector('input[name=telefono]').value.toString(),
                'subject' : formContact.querySelector('input[name=asunto]').value.toString(),
                'message': formContact.querySelector('textarea[name=mensaje]').value.toString()
            }
        };

        document.querySelector('body').classList.add('overlay');
        document.querySelector('.spinner-content').classList.remove('u-hidden');

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            document.querySelector('body').classList.remove('overlay');
            document.querySelector('.spinner-content').classList.add('u-hidden');
            $('#contact-form').trigger("reset");
            document.querySelector('.js-banner').classList.add('banner--active');
            document.querySelector('.js-banner').querySelector('.js-banner-text').innerHTML =  'El correo se ha enviado correctamente, te atenderemos lo antes posible, gracias!'
            if( document.querySelector('.js-banner').classList.contains('banner--error')){
                document.querySelector('.js-banner').classList.remove('banner--error')
            }
            document.querySelector('.js-banner').classList.add('banner--correct');
            
        }).fail(function(error) {
            document.querySelector('.js-banner').classList.add('banner--active');
            document.querySelector('.js-banner').querySelector('.js-banner-text').innerHTML = 'No se ha podido enviar el formulario, intentalo de nuevo más tarde';
            document.querySelector('body').classList.remove('overlay');
            document.querySelector('.spinner-content').classList.add('u-hidden');
            if( document.querySelector('.js-banner').classList.contains('banner--correct')){
                document.querySelector('.js-banner').classList.remove('banner--correct')
            }
            document.querySelector('.js-banner').classList.add('banner--error');
        });

    });
}
    

