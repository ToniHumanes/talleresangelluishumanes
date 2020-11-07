
document.addEventListener('DOMContentLoaded', function() {

    var cookies = function () {
        
        var seccionCookie = document.querySelector('section.cookies');
        var cookieAccept = document.querySelector('.js-accept-cookies');
    
        //-----------------------------------------------------
        // Funciones
        //-----------------------------------------------------

        function hiddenCookie() {
            // Borra la sección de cookies en el HTML
            seccionCookie.remove();
        }

        /**
         * Método que marca las cookies como aceptadas
         */
        function acceptCookies() {
            // Oculta el HTML de cookies
            hiddenCookie();
            // Guarda que ha aceptado
            localStorage.setItem('cookie', true);
            // Tu codigo a ejecutar si aceptan las cookies
            cookiesHasAccept();
        }

        /**
         * Método que ejecuta tu código si aceptan las cookies
         */
        function cookiesHasAccept() {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-180763286-1');
        }

        /**
         * Método que inicia la lógica
         */
        function iniciar() {
            // Comprueba si en el pasado el usuario ha marcado una opción
            if (localStorage.getItem('cookie') !== null) {
                if(localStorage.getItem('cookie') === 'true') {
                    // Aceptó
                    acceptCookies();
                }
            }
        }

        //-----------------------------------------------------
        // Eventos
        //-----------------------------------------------------
        cookieAccept.addEventListener('click',acceptCookies, false);
        
        return {
            iniciar: iniciar
        }
    }

    // Activa el código. Comenta si quieres desactivarlo.
    cookies().iniciar();

});