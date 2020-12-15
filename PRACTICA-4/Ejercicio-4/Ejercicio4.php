<!DOCTYPE HTML>

<html lang="es">
<head>
    <!-- Datos que describen el documento -->
    <meta charset="UTF-8">
    <title>Blade Runner</title>
    <META name="Reseña Blade Runner" CONTENT="Descripción detallada de la pelicula Blade Runner">
    <link rel="stylesheet" type="text/css" href="Ejercicio4.css">
</head>

<body>
    <?php
        session_name('p58');
        session_start();
        class Documento { 
            public $titulo;
            public $nav1;
            public $nav2;
            public $nav3;
            public $idioma;
	            public function __construct (){ 
		            $this->titulo = "Peliculas SEW 2020";
		            $this->nav1 = "Reseña";
		            $this->nav2 = "Protagonistas";
                    $this->nav3 = "Comercialización";
		            $this->idioma = "es";
	            }
        }
        $documento = new Documento();
        if(isset($_SESSION['documento'])){
            $documento=$_SESSION['documento'];
        }else{
            $_SESSION['documento']=$documento;
        }
        if (count($_POST)>0) 
        {   
            if(isset($_POST['ES'])) $documento->idioma="es";
            if(isset($_POST['EN'])) $documento->idioma="en";
            if(isset($_POST['FR'])) $documento->idioma="fr";

            $curl = curl_init();

            curl_setopt_array($curl, [
                CURLOPT_URL => "https://google-translate1.p.rapidapi.com/language/translate/v2",
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "POST",
                CURLOPT_POSTFIELDS => "q=Peliculas SEW 2020|Reseña|Protagonistas|Comercialización&source=es&target=".$documento->idioma,
                CURLOPT_HTTPHEADER => [
                    "accept-encoding: application/gzip",
                    "content-type: application/x-www-form-urlencoded",
                    "x-rapidapi-host: google-translate1.p.rapidapi.com",
                    "x-rapidapi-key: 88a9316d94msh43e3a60416fc282p1e36cbjsnf54a90e7cba5"
                ],
            ]);

            $response = curl_exec($curl);
            $err = curl_error($curl);

            curl_close($curl);

            if ($err) {
            } else {
                if($documento->idioma!="es"){
                    $resp=json_decode($response,true);
                    $str=explode("|",$resp['data']['translations'][0]['translatedText']);
                    $documento->titulo=$str[0];
                    $documento->nav1=$str[1];
                    $documento->nav2=$str[2];
                    $documento->nav3=$str[3];
                }else{//Para no hacer mucahs peticiones a la api y no se consuma rapido el credito
                    $documento->titulo="Peliculas SEW 2020";
                    $documento->nav1="Reseña";
                    $documento->nav2="Protagonistas";
                    $documento->nav3="Comercialización";
                }
            }
        }
        

        echo "<!-- Datos con el contenidos que aparece en el navegador -->
        <header>
            <h1 class='principal' id='principalH1'>$documento->titulo</h1>
            <nav class='menu'>
            <ul>
                <li><a id='reseña'>$documento->nav1</a></li>
                <li><a id='protas'>$documento->nav2</a></li>
                <li><a id='comer'>$documento->nav3</a></li>
                <li class='dropdown'>
                    <a class='dropbtn'>Language</a>
                    <div class='dropdown-content'>
                        <form action='#' method='post' name='botones'>
                            <input class='dropdown-item' name='ES' type='submit' value='Español'/>
                            <input class='dropdown-item' name='EN' type='submit' value='English'/>
                            <input class='dropdown-item' name='FR' type='submit' value='Francais'/>
                        <form>
                    </div>
                  </li>
            </ul>
            </nav>
        </header>";
    ?>
    <section>
        <h2 id="h2Cambniante">Hablemos de Blade Runner</h2>
        <div id="divisor">

        <p>Blade Runner es una película neo-noir y de ciencia ficción estadounidense dirigida por Ridley Scott, estrenada en 1982. 
        Fue escrita por Hampton Fancher y David Webb Peoples, y el reparto se compone de Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos, M. Emmet Walsh, Daryl Hannah, William Sanderson, Brion James, Joe Turkel y Joanna Cassidy. 
        Está basada parcialmente en la novela de Philip K. Dick ¿Sueñan los androides con ovejas eléctricas? (1968). Es la primera película de la franquicia Blade Runner.
        </p>

        <p>Inicialmente Blade Runner recibió críticas mixtas de parte de la prensa especializada. Unos se mostraron confundidos y decepcionados de que no tuviese el ritmo narrativo que se esperaba de una película de acción, mientras otros apreciaban su ambientación y complejidad temática. 
        La película no obtuvo buenos resultados de taquilla en los cines norteamericanos, pero fue posteriormente revalorizada en el mercado doméstico hasta convertirse en una película de culto, siendo considerada una de las mejores películas de ciencia ficción y una precursora del género ciberpunk. 
        Fue candidata a dos Óscar (mejor dirección artística y mejores efectos visuales), ganó tres Premios BAFTA de ocho nominaciones, y la banda sonora compuesta por Vangelis fue nominada al Globo de Oro.
        </p>

        <p>La acción transcurre en una versión distópica de la ciudad de Los Ángeles, EE. UU., durante el mes de noviembre de 2019. Describe un futuro en el que, mediante bioingeniería, se fabrican humanos artificiales denominados replicantes, a los que se emplea en trabajos peligrosos y como esclavos en las «colonias del mundo exterior» de la Tierra. 
        Fabricados por Tyrell Corporation para ser «más humanos que los humanos» —especialmente el modelo Nexus-6—, son indistinguibles físicamente de un humano, aunque tienen una mayor agilidad y fuerza física, y carecen teóricamente de la misma respuesta emocional y empática. 
        Los replicantes fueron declarados ilegales en la Tierra tras un sangriento motín ocurrido en una colonia exterior. Un cuerpo especial de la policía, los blade runners, se encarga de identificar, rastrear y matar —o «retirar», en términos de la propia policía— a los replicantes fugitivos que se encuentran en la Tierra. 
        Con un grupo de replicantes suelto en Los Ángeles, Rick Deckard, un «viejo» blade runner, es sacado de su semi-retiro para eliminarlos.
        </p>
        </div>
    </section>
</body>
</html>