<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="src/dist/style.css">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Ubuntu:400,700&display=swap" rel="stylesheet">
    <title>Document</title>
</head>

<body>

    <?php include "./header.php" ?>

    <main class="main">
        <section class="hero" style="background-image: url(src/imagenes/imagen-hero-home.jpg);">
            
            <div class="o-container u-p-none">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <p class="hero__title">Instalaciones</p>
                        <p class="hero__paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo sunt iusto nesciunt assumenda veniam excepturi similique dolorum eos! Libero numquam omnis, suscipit dicta velit fugiat ullam provident tenetur veniam sint.</p>
                    </div>
                </div>
            </div>
        </section>


        <section class="tech-investment o-container">
            <p class="patnerts__title u-text-center">Inversión tecnológica y compromiso con el medio ambiente</p>
            <div class="tech-investment__cabin">

                <div class="tech-investment__cabin-content">
                    <p class="paragraph--small{ u-text-center">Uno de los grandes objetivos de <span class="u-weight-bold">Talleres Angel Luis Humanes</span> es estar actualizados en cuanto a la reparación del automóvil se refiere, por eso, nuestros empleados, disponen de lo último en maquinaria para el desarrollo de su trabajo:</p>
                    <img src="src/imagenes/imagen-cabina.jpg" alt="" class="tech-investment__cabin-image">
                </div>


                <p class="title--light title--blue u-weight-bold u-text-center">Cabina de Gas Natural</p>
                <img src="src/imagenes/logo-spanesi.jpg" alt="" class="tech-investment__cabin-logo">
            </div>

            <div class="tech-investment__tools">
                <div class="tech-investment__tools-item">
                    <img src="src/imagenes/imagen-bancada.png" alt="" class="tech-investment__tools-image">
                    <p class="tech-investment__tools-paragraph">Bancada con medidor digital</p>
                </div>
                <div class="tech-investment__tools-item">
                    <img src="src/imagenes/imagen-centralita.jpg" alt="" class="tech-investment__tools-image">
                    <p class="tech-investment__tools-paragraph">Máquina de diagnosis BOSH KTS</p>
                </div>
                <div class="tech-investment__tools-item">
                    <img src="src/imagenes/imagen-cc16.png" alt="" class="tech-investment__tools-image">
                    <p class="tech-investment__tools-paragraph">Máquina de limpieza de motor con Oxy-hidrógeno</p>
                </div>
                <div class="tech-investment__tools-item">
                    <img src="src/imagenes/imagen-konfort.jpg" alt="" class="tech-investment__tools-image">
                    <p class="tech-investment__tools-paragraph">Máquina de carga de aire acondicionado r1234yf</p>
                </div>
            </div>
        </section>

        <div class="o-container">
            <section class="environment">
                <img src="src/imagenes/icon-reciclaje.png" alt="" class="environment__icon">
                <p class="paragraph--small environment__paragraph u-text-center">En <span class="u-weight-bold">Talleres Ángel Luis Humanes</span> estamos comprometidos con el medio ambiente, ya que todos los residuos tóxicos son clasificados y posteriormente reciclados.</p>
                <div class="environment__item-image"><img src="src/imagenes/imagen-reciclaje.jpg" alt="" class="environment__image"></div>
                <div class="environment__item-image"><img src="src/imagenes/imagen-metal.png" alt="" class="environment__image"></div>
                <div class="environment__item-image"><img src="src/imagenes/imagen-cristal.png" alt="" class="environment__image"></div>
                <div class="environment__item-image"><img src="src/imagenes/imagen-carton.png" alt="" class="environment__image"></div>
                <div class="environment__item-image"><img src="src/imagenes/imagen-plastico.png" alt="" class="environment__image"></div>
            </section>
        </div>

 

       






        <?php include "./footer.php" ?>

    </main>
</body>
<script src="src/dist/main.js"></script>
</html>