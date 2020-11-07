<!DOCTYPE html>
<html lang="es">

<head>
    <?php include "./head.php" ?>
    <title>Conoce nuestro taller mecánico en Aranjuez</title>
    <meta name="description" content="Talleres Ángel Luis Humanes, tu taller mecánico en Aranjuez desde 1984. Conoce nuestra historia y trabajos de mecánica, chapa y pintura. ">
</head>

<?php include "./header.php" ?>

<main class="main">
    <section class="hero hero__page-about">
        
        <div class="o-container u-p-none">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h1 class="hero__title">Sobre nosotros</h1>
                </div>
            </div>
        </div>
    </section>


    <section class="o-container">
        <div class="about-us__title-content">
            <img src="src/imagenes/sobre-nosotros/logo-30-anios.png" alt="Más de 30 años de experiencia" class="about-us__logo">
            <p class="about-us__title u-text-center u-text-left@md title--small u-weight-bold">en la vanguardia del <span class="title title--blue title--light u-text-uppercase"> cuidado del <span class="u-inline u-block@md">automóvil</span></span></p>
        </div>
    </section>

    <section class="tech-investment o-container">
           
            <div class="">
                <p class="u-p-small u-bgcolor-grey paragraph--small u-text-center u-text-left@md u-mb-none u-pb-large"><span class="u-weight-bold">Talleres Ángel Luis Humanes</span> nace en 1984, cuando Ángel Luis Humanes, su fundador, abre su primer taller de mecánica en Calle Foso (Aranjuez).</p>

                <div class="about-us__slider">
                        <div><img src="src/imagenes/sobre-nosotros/imagen-slider-5.jpg" alt="Fachada Talleres Ángel Luis Humanes"></div>
                        <div><img src="src/imagenes/sobre-nosotros/imagen-slider-4.jpg" alt="Interior Talleres Ángel Luis Humanes"></div>
                        <div><img src="src/imagenes/sobre-nosotros/imagen-slider-3.jpg" alt="Imagen Nosotros/Imagen-Slider"></div>
                        <div><img src="src/imagenes/sobre-nosotros/imagen-slider-2.jpg" alt="Vehículo de sustitución"></div>
                </div>
                <p class="paragraph u-text-center">Posteriormente, la empresa se amplía con <span class="u-weight-bold">la apertura del taller de calle Moreras </span>, en la misma localidad, donde actualmente se realizan trabajos de mecánica, chapa y pintura.</p>
                <p class="paragraph u-text-center">Para ofrecer un servicio único, profesional y de confianza sus empleados se forman y trabajan diariamente a la vanguardia del cuidado del automóvil.</p>
            </div>
    </section>

    <div class="adn-background-section">
        <section class="o-container">

    <div class="adn-background-section__content">
        <div class="title__with-logo u-mb-medium">
            <img src="src/imagenes/sobre-nosotros/icon-adn-blue.svg" alt="">
            <h2 class="title title--blue title--light u-text-uppercase">adn de empresa:</h2>
        </div>

        <p class="paragraph">Nuestra principal meta es la satisfacción de nuestros clientes, y que el trato hacia ellos sea eficaz, cómodo y de calidad.</p>
    </div>


        </section>
    </div> 

    <div class="adn-background-section-future">
        <section class="o-container">
            <div class="adn-background-section-future__content">
                <div class="title__with-logo title__with-logo--revert u-mb-medium">
                    <h2 class="title title--white title--light u-text-uppercase title-revert u-text-right ">Nuestro futuro:</h2>
                    <img src="src/imagenes/sobre-nosotros/icon-adn.svg" alt="">
                </div>
    
                <p class="paragraph u-color-white u-text-right">Talleres Angel Luis Humanes es una empresa joven y dinámica que, sin perder su esencia original basada en la profesionalidad y en el trabajo bien hecho, tiene todo el futuro por delante gracias a las nuevas generaciones; los hijos de Ángel Luis Humanes. Ellos son ya el presente y el relevo que encamina a la empresa a un continuo crecimiento.</p>
            </div>
        </section>
    </div> 

<?php include "./footer.php" ?>

</main>
<script src="src/vendors/jquery.js"></script>
<script src="src/vendors/slick.min.js"></script>
<script src="src/dist/main.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
      $('.about-us__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        accessibility: true,
        arrows: false,
        dots:true,
        infinite: true,
        mobileFirst: true,
        pauseOnHover: true,
        pauseOnDotsHover:true,
        swipe: true
        });
    });
  </script>
</body>