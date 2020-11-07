

    if( !!document.getElementById('suggestions-mailbox') ){
    // buzon sugerencias

    document.getElementById('suggestions-mailbox').addEventListener('submit', function(event) {
        event.preventDefault();

        var suggestionsMailbox = document.getElementById('suggestions-mailbox');
        var selectElement = document.getElementById('suggestions-mailbox').querySelector('select[name=departamento]');
        var selectValue = selectElement.value;
        selectText = selectElement.options[selectValue].text;

        if( selectValue === "0"){
            if( document.querySelector('.js-banner').classList.contains('banner--correct')){
                document.querySelector('.js-banner').classList.remove('banner--correct')
            }
            document.querySelector('.js-banner').classList.add('banner--error');
            document.querySelector('.js-banner').classList.add('banner--active');
            document.querySelector('.js-banner').querySelector('.js-banner-text').innerHTML = 'Elige un departamento';
            return false;
        }

        var data = {
            service_id: 'service_2zaktzh',
            template_id: 'template_eh70esz',
            user_id: 'user_Telqa5mrfZjsFQNSLAZXh',
            template_params: {
                'departament': selectText,
                'subject' : suggestionsMailbox.querySelector('input[name=asunto]').value.toString(),
                'message': suggestionsMailbox.querySelector('textarea[name=mensaje]').value.toString()
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
            $('#suggestions-mailbox').trigger("reset");
            document.querySelector('.js-banner').classList.add('banner--active');
            document.querySelector('.js-banner').querySelector('.js-banner-text').innerHTML = 'El correo se ha enviado correctamente, ¡gracias!';
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
