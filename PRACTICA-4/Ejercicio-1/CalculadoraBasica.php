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
            session_name('p1');
            session_start();
			class Calculadora {
                protected $m;
                public $resultado;
            
                public function __construct(){
                    $this->resultado="";
                    $this->m=0.0;
                }
                public function unos(){
                    $this->resultado = $this->resultado . "1";
                }
                public function does(){
                    $this->resultado = $this->resultado . "2";
                }
                public function treses(){
                    $this->resultado = $this->resultado . "3";
                }
                public function cuatros(){
                    $this->resultado = $this->resultado . "4";
                }
                public function cincos(){
                    $this->resultado = $this->resultado . "5";
                }
                public function seises(){
                    $this->resultado = $this->resultado . "6";
                }
                public function sietes(){
                    $this->resultado = $this->resultado . "7";
                }
                public function ochos(){
                    $this->resultado = $this->resultado . "8";
                }
                public function nueves(){
                    $this->resultado = $this->resultado . "9";
                }
                public function ceros(){
                    $this->resultado = $this->resultado . "0";
                }
                public function multip(){
                    $this->resultado = $this->resultado . "*";
                }
                public function divi(){
                    $this->resultado = $this->resultado . "/";
                }
                public function sumar(){
                    $this->resultado = $this->resultado . "+";
                }
                public function restar(){
                    $this->resultado = $this->resultado . "-";
                }
                public function clean(){
                    $this->resultado = "";
                }
                public function getM(){
                    $this->resultado = $this->resultado . $this->m;
                }
                public function mMenos(){
                    $str = $this->m;
                    $str2 = $this->resultado;
                    $this->m=eval("return $str;")-eval("return $str2;");
                }
                public function mMas(){
                    $str = $this->m;
                    $str2 = $this->resultado;
                    $this->m=eval("return $str;")+eval("return $str2;");
                }
                public function result(){
                        $str = $this->resultado;
                        $this->resultado =eval("return $str;");
                }
                public function comas(){
                    $this->resultado = $this->resultado + ".";
                }
            }
            $calculadora = new Calculadora();
            if(isset($_SESSION['calculadora'])){
                $calculadora=$_SESSION['calculadora'];
            }else{
                $_SESSION['calculadora']=$calculadora;
            }
            if (count($_POST)>0) 
                {   
                    if(isset($_POST['cero'])) $calculadora->ceros();
                    if(isset($_POST['uno'])) $calculadora->unos();
                    if(isset($_POST['dos'])) $calculadora->does();
                    if(isset($_POST['tres'])) $calculadora->treses();
                    if(isset($_POST['cuatro'])) $calculadora->cuatros();
                    if(isset($_POST['cinco'])) $calculadora->cincos();
                    if(isset($_POST['seis'])) $calculadora->seises();
                    if(isset($_POST['siete'])) $calculadora->sietes();
                    if(isset($_POST['ocho'])) $calculadora->ochos();
                    if(isset($_POST['nueve'])) $calculadora->nueves();
                    if(isset($_POST['igual'])) $calculadora->result();
                    if(isset($_POST['limpiar'])) $calculadora->clean();
                    if(isset($_POST['punto'])) $calculadora->comas();
                    if(isset($_POST['multiplicacion'])) $calculadora->multip();
                    if(isset($_POST['division'])) $calculadora->divi();
                    if(isset($_POST['suma'])) $calculadora->sumar();
                    if(isset($_POST['resta'])) $calculadora->restar();
                    if(isset($_POST['m1'])) $calculadora->getM();
                    if(isset($_POST['m2'])) $calculadora->mMenos();
                    if(isset($_POST['m3'])) $calculadora->mMas();
                }
            
            echo "<div id='containerCalculadora'>
                        <label for='resultado'>Pantalla Calculadora</label>
                        <input type='text' id='resultado' value='$calculadora->resultado' />
                        <form action='#' method='post' name='botones'>
                        <div class='grid-container'>
                            <div class='grid-item'><input type='submit' value='mrc' name='m1' /></div>
                            <div class='grid-item'><input type='submit' value='m-' name='m2' /></div>
                            <div class='grid-item'><input type='submit' value='m+' name='m3' /></div>
                            <div class='grid-item'><input type='submit' value='/' name='division' /></div>
                            <div class='grid-item'><input type='submit' value='7' name='siete' /></div>
                            <div class='grid-item'><input type='submit' value='8' name='ocho' /></div>
                            <div class='grid-item'><input type='submit' value='9' name='nueve' /></div>
                            <div class='grid-item'><input type='submit' value='*' name='multiplicacion'/></div>
                            <div class='grid-item'><input type='submit' value='4' name='cuatro' /></div>
                            <div class='grid-item'><input type='submit' value='5' name='cinco' /></div>
                            <div class='grid-item'><input type='submit' value='6' name='seis' /></div>
                            <div class='grid-item'><input type='submit' value='-' name='resta' /></div>
                            <div class='grid-item'><input type='submit' value='1' name='uno' /></div>
                            <div class='grid-item'><input type='submit' value='2' name='dos' /></div>
                            <div class='grid-item'><input type='submit' value='3' name='tres' /></div>
                            <div class='grid-item'><input type='submit' value='+' name='suma' /></div>
                            <div class='grid-item'><input type='submit' value='0' name='cero' /></div>
                            <div class='grid-item'><input type='submit' value='.' name='punto' /></div>
                            <div class='grid-item'><input type='submit' value='C' name='limpiar' /></div>
                            <div class='grid-item'><input type='submit' value='=' name='igual' /></div>
                        </div>
                        </form>
                    </div>";
       ?>
    </section>
    <footer>
        <p>Calculadora Basica creada para la asignatura SEW</p>
    </footer>
</body>
</html>