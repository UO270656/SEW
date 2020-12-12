<!DOCTYPE HTML>

<html lang="es">
<head>
    <!-- Datos que describen el documento -->
    <meta charset="UTF-8">
    <title>Calculadora</title>
    <META name="Calculadora Basica" CONTENT="Pagina web que simula una calculadora">
    <link rel="stylesheet" type="text/css" href="CalculadoraBasica.css">
</head>

<body>
    <header>
        <h1>SEW 2020</h1>
    </header>
    <section>
        <h2>Calculadora Basica</h2>
        <p>Pagina web que simula una calculadora con todas las funciones básicas que la mayoría de las calculadoras tienen</p>
        <?php
			class Calculadora {
                protected $m;
                protected $resultado;
            
                public function __construct($resultado){
                    $this->resultado=$resultado;
                    $this->m=0.0;
                }
                public function unos(){
                    $this->resultado = $this->resultado + "1";
                }
                public function does(){
                    $this->resultado = $this->resultado + "2";
                }
                public function treses(){
                    $this->resultado = $this->resultado + "3";
                }
                public function cuatros(){
                    $this->resultado = $this->resultado + "4";
                }
                public function cincos(){
                    $this->resultado = $this->resultado + "5";
                }
                public function seises(){
                    $this->resultado = $this->resultado + "6";
                }
                public function sietes(){
                    $this->resultado = $this->resultado + "7";
                }
                public function ochos(){
                    $this->resultado = $this->resultado + "8";
                }
                public function nueves(){
                    $this->resultado = $this->resultado + "9";
                }
                public function ceros(){
                    $this->resultado = $this->resultado + "0";
                }
                public function multip(){
                    $this->resultado = $this->resultado + "*";
                }
                public function divi(){
                    $this->resultado = $this->resultado + "/";
                }
                public function sumar(){
                    $this->resultado = $this->resultado + "+";
                }
                public function restar(){
                    $this->resultado = $this->resultado + "-";
                }
                public function clean(){
                    $this->resultado = "";
                }
            }
            
            echo "<div id='containerCalculadora'>
                        <label for='resultado'>Pantalla Calculadora</label>
                        <input type='text' id='resultado' disabled />
                        <div class='grid-container'>
                            <div class='grid-item'><input type='button' value='mrc' onclick='calculadora.getM()' id='m1' /></div>
                            <div class='grid-item'><input type='button' value='m-' onclick='calculadora.mMenos()' id='m2' /></div>
                            <div class='grid-item'><input type='button' value='m+' onclick='calculadora.mMas()' id='m3' /></div>
                            <div class='grid-item'><input type='button' value='/' onclick='calculadora.divi()' id='division' /></div>
                            <div class='grid-item'><input type='button' value='7' onclick='calculadora.sietes()' id='siete' /></div>
                            <div class='grid-item'><input type='button' value='8' onclick='calculadora.ochos()' id='ocho' /></div>
                            <div class='grid-item'><input type='button' value='9' onclick='calculadora.nueves()' id='nueve' /></div>
                            <div class='grid-item'><input type='button' value='*' onclick='calculadora.multip()' id='multiplicacion'/></div>
                            <div class='grid-item'><input type='button' value='4' onclick='calculadora.cuatros()' id='cuatro' /></div>
                            <div class='grid-item'><input type='button' value='5' onclick='calculadora.cincos()' id='cinco' /></div>
                            <div class='grid-item'><input type='button' value='6' onclick='calculadora.seises()' id='seis' /></div>
                            <div class='grid-item'><input type='button' value='-' onclick='calculadora.restar()' id='resta' /></div>
                            <div class='grid-item'><input type='button' value='1' onclick='calculadora.unos()' id='uno' /></div>
                            <div class='grid-item'><input type='button' value='2' onclick='calculadora.does()' id='dos' /></div>
                            <div class='grid-item'><input type='button' value='3' onclick='calculadora.treses()' id='tres' /></div>
                            <div class='grid-item'><input type='button' value='+' onclick='calculadora.sumar()' id='suma' /></div>
                            <div class='grid-item'><input type='button' value='0' onclick='calculadora.ceros()' id='cero' /></div>
                            <div class='grid-item'><input type='button' value='.' onclick='calculadora.comas()' id='punto' /></div>
                            <div class='grid-item'><input type='button' value='C' onclick='calculadora.clean()' id='limpiar' /></div>
                            <div class='grid-item'><input type='button' value='=' onclick='calculadora.result()' id='igual' /></div>
                        </div>
                    </div>";
       ?>
    </section>
    <footer>
        <p>Calculadora Basica creada para la asignatura SEW</p>
    </footer>
</body>
</html>