<!DOCTYPE html>
<html lang="es">

<head>
    <?php include "./head.php" ?>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
    <title>Buzón de sugerencias Talleres Ángel Luis Humanes</title>
    <meta name="description" content="Envíanos cualquier recomendación o sugerencia para seguir mejorando. En nuestro taller mecánico Ángel Luis Humanes, tu opinión es lo más importante">
</head>

<?php include "./header.php" ?>

<main class="main">
    <section class="hero hero__page-suggestions-mailbox">
        
        <div class="o-container u-p-none">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h1 class="hero__title">buzón de sugerencias</h1>
                </div>
            </div>
        </div>
    </section>


        <section class="u-pt-xxl u-pb-xxl">
            <div class="o-container">
            <p class="paragraph u-text-center">En <span class="u-weight-bold">Talleres Ángel Luis Humanes</span> tu opinión es importante para nosotros, puedes mandarnos cualquier recomendación de mejora en este formulario y estaremos encantados de ayudarte.</p>

                <p class=" u-mb-small u-text-right"><small>*Campos obligatorios</small></p>
                <form action=""  class="contact-form-item u-relative" id="suggestions-mailbox">
                    <div class="row">
                        <div class="col-12">
                            <select name="departamento" id="" required class="input input--grey select-icon">
                                <option value="0" selected disabled hidden>Seleccione el departamento*</option>
                                <option value="1" >Mécanica</option>
                                <option value="2" >Chapa y pintura</option>
                                <option value="3" >Administración</option>
                                <option value="4" >Digital | Web</option>
                            </select>
                        </div>
                        <div class="col-12"><input type="text" name="asunto" class="input input--grey" placeholder="Asunto*" required></div>
                        <div class="col-12">
                            <textarea name="mensaje" id="" cols="30" rows="10" class="input input--grey textarea" placeholder="Mensaje*" required></textarea>
                        </div>
                    </div>
                                
                    <div class="u-flex u-fd-col u-ai-center u-ai-end@md u-pt-large u-pb-large u-pt-none@sm u-pb-none@sm">
                        <button class="button--blue-light button--rounded">Enviar</button>
                    </div>
                    <div class="spinner-content u-hidden">
                        <img src="src/imagenes/contacto/cargando.svg" alt="Cargando formulario de buzón de sugerencias de Talleres Angel Luis Humanes" class="spinner">
                    </div>
                </form>
            </div>
        </section>





<?php include "./footer.php" ?>
<?php include "./banner.php" ?>
</main>
<script src="src/vendors/jquery.js"></script>
<script src="src/dist/main.js"></script>
<script src="src/dist/contact.js"></script>
</body>