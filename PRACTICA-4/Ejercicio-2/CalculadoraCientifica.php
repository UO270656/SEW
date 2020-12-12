<!DOCTYPE HTML>

<html lang="es">
<head>
    <!-- Datos que describen el documento -->
    <meta charset="UTF-8">
    <title>Calculadora Cientifica</title>
    <meta name="Calculadora Cientifica" CONTENT="Pagina web que simula una calculadora">
    <link rel="stylesheet" type="text/css" href="CalculadoraCientifica.css">
</head>

<body>
    <header>
        <h1>SEW 2020</h1>
    </header>
    <section>
        <h2>Calculadora Cientifica</h2>
        <p>Pagina web que simula una calculadora con todas las funciones básicas y cientificas que la mayoría de las calculadoras tienen</p>
        <?php
            session_name('p3');
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
                    $this->resultado = $this->resultado . ".";
                }
            }
			class CalculadoraCientifica extends Calculadora{
                public $evaluable;
                public $lastR;
                public $firstTime;
            
                public function __construct(){
                    parent::__construct();
                    $this->evaluable="";
                    $this->lastR=0;
                    $this->firstTime=true;
                }
                public function unos(){
                    parent::unos();
                    $this->evaluable=$this->evaluable . "1";
                }
                public function does(){
                    parent::does();
                    $this->evaluable=$this->evaluable . "2";
                }
                public function treses(){
                    parent::treses();
                    $this->evaluable=$this->evaluable . "3";
                }
                public function cuatros(){
                    parent::cuatros();
                    $this->evaluable=$this->evaluable . "4";
                }
                public function cincos(){
                    parent::cincos();
                    $this->evaluable=$this->evaluable . "5";
                }
                public function seises(){
                    parent::seises();
                    $this->evaluable=$this->evaluable . "6";
                }
                public function sietes(){
                    parent::sietes();
                    $this->evaluable=$this->evaluable . "7";
                }
                public function ochos(){
                    parent::ochos();
                    $this->evaluable=$this->evaluable . "8";
                }
                public function nueves(){
                    parent::nueves();
                    $this->evaluable=$this->evaluable . "9";
                }
                public function ceros(){
                    parent::ceros();
                    $this->evaluable=$this->evaluable . "0";
                }
                public function multip(){
                    parent::multip();
                    $this->evaluable=$this->evaluable . "*";
                }
                public function divi(){
                    parent::divi();
                    $this->evaluable=$this->evaluable . "/";
                }
                public function sumar(){
                    parent::sumar();
                    $this->evaluable=$this->evaluable . "+";
                }
                public function restar(){
                    parent::restar();
                    $this->evaluable=$this->evaluable . "-";
                }
                public function clean(){
                    parent::clean();
                    $this->evaluable="";
                }
                public function result(){
                    $this->resultado =eval("return $this->evaluable;");
                    $this->lastR=$this->resultado;
                }
                public function comas(){
                    parent::comas();
                    $this->evaluable=$this->evaluable . ".";
                }
                public function cleanAll(){
                    $this->clean();
                    $this->cleanM();
                }
                public function getM(){
                    parent::getM();
                    $this->evaluable=$this->evaluable . $this->m;
                }
                public function cleanM(){
                    $this->m=0;
                }
                public function mAdd(){
                    $str = $this->resultado;
                    $this->m=eval("return $str;");
                }
                public function parentesisAbierto(){
                    $this->resultado = $this->resultado . "(";
                    $this->evaluable = $this->evaluable . "(";
                }
                public function parentesisCerrado(){
                    $this->resultado = $this->resultado . ")";
                    $this->evaluable = $this->evaluable . ")";
                }
                public function elevateTwo(){
                        $this->resultado = "(" .$this->resultado . ")\u{00B2}";
                        $aux=eval("return $this->evaluable;")."**2";
                        $this->evaluable=eval("return $aux;");
                }
                public function elevateN(){
                        $this->resultado = "(" .$this->resultado . ")^";
                        $this->evaluable=eval("return $this->evaluable;")."**";
                }
                public function sin(){
                        $this->resultado = "sin(" .$this->resultado . ")";
                        $this->evaluable=sin(eval("return $this->evaluable;"));
                }
                public function cos(){
                        $this->resultado = "cos(" .$this->resultado . ")";
                        $this->evaluable=cos(eval("return $this->evaluable;"));
                }
                public function tan(){
                        $this->resultado = "tan(" .$this->resultado . ")";
                        $this->evaluable=tan(eval("return $this->evaluable;"));
                }
                public function pi(){
                    $this->resultado = $this->resultado . "\u{03C0}";
                    $this->evaluable=$this->evaluable."3.141592653";
                }
                public function square(){
                        $this->resultado = "\u{221A}(" .$this->resultado . ")";
                        $this->evaluable=sqrt(eval("return $this->evaluable;"));
                }
                public function expo(){
                        $this->resultado = "10^(" .$this->resultado . ")";
                        $aux="10**(".(eval("return $this->evaluable;")).")";
                        $this->evaluable=eval("return $aux;");
                }
                public function delete(){
                    $this->resultado=substr($this->resultado,0,-1);
                    $this->evaluable=substr($this->evaluable,0,-1);
                }
                public function lastResult(){
                    $this->resultado=$this->lastR;
                    $this->evaluable=$this->lastR;
                }
                public function logN(){
                        $this->resultado = "log(" .$this->resultado . ")";
                        $this->evaluable=log(eval("return $this->evaluable;"));
                }
                public function factorial(){
                        $this->resultado = "(" .$this->resultado . ")!";
                        $aux=$this->factorialRecursivo(eval("return $this->evaluable;"));
                        $this->evaluable=eval("return $aux;");
            
                }
                public function factorialRecursivo ($n) { 
                    if ($n == 0){ 
                        return 1; 
                    }
                    return $n * $this->factorialRecursivo ($n-1); 
                }
                public function masMenos(){
                        $this->evaluable=eval("return $this->evaluable;");
                    if($this->evaluable>0){
                        $this->resultado = "-(" .$this->resultado . ")";
                        $this->evaluable=0-$this->evaluable;
                    }else if($this->evaluable<0){
                        $this->resultado = "+(" .$this->resultado . ")";
                        $this->evaluable=0-$this->evaluable;
                    }
                }
                public function exponente(){
                        $this->resultado = "(" .$this->resultado . ")*10^";
                        $this->evaluable=eval("return $this->evaluable;")."*10**";
                }
                public function mod(){
                        $this->resultado = $this->resultado . " Mod ";
                        $this->evaluable=eval("return $this->evaluable;")."%";
                }
            }
            $calculadora = new CalculadoraCientifica();
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
                    if(isset($_POST['c'])) $calculadora->clean();
                    if(isset($_POST['coma'])) $calculadora->comas();
                    if(isset($_POST['multiplicacion'])) $calculadora->multip();
                    if(isset($_POST['division'])) $calculadora->divi();
                    if(isset($_POST['suma'])) $calculadora->sumar();
                    if(isset($_POST['resta'])) $calculadora->restar();
                    if(isset($_POST['MC'])) $calculadora->cleanM();
                    if(isset($_POST['MR'])) $calculadora->getM();
                    if(isset($_POST['M-'])) $calculadora->mMenos();
                    if(isset($_POST['M+'])) $calculadora->mMas();
                    if(isset($_POST['MS'])) $calculadora->mAdd();
                    if(isset($_POST['ce'])) $calculadora->cleanAll();
                    if(isset($_POST['('])) $calculadora->parentesisAbierto();
                    if(isset($_POST[')'])) $calculadora->parentesisCerrado();

                    if(isset($_POST['x^2'])) $calculadora->elevateTwo();
                    if(isset($_POST['x^y'])) $calculadora->elevateN();
                    if(isset($_POST['sin'])) $calculadora->sin();
                    if(isset($_POST['cos'])) $calculadora->cos();
                    if(isset($_POST['tan'])) $calculadora->tan();
                    if(isset($_POST['square'])) $calculadora->square();
                    if(isset($_POST['10^x'])) $calculadora->exponente();
                    if(isset($_POST['log'])) $calculadora->logN();
                    if(isset($_POST['Exp'])) $calculadora->expo();
                    if(isset($_POST['Mod'])) $calculadora->mod();
                    if(isset($_POST['flecha'])) $calculadora->lastResult();
                    if(isset($_POST['f_izq'])) $calculadora->delete();
                    if(isset($_POST['pi'])) $calculadora->pi();
                    if(isset($_POST['factorial'])) $calculadora->factorial();
                    if(isset($_POST['+-'])) $calculadora->masMenos();
                }
            
            echo "<div id='containerCalculadora'>
            <label for='resultado'>Pantalla Calculadora</label>
            <input type='text' id='resultado' value='$calculadora->resultado' />
            <form action='#' method='post' name='botones'>
            <div class='grid-container'>
                <div class='grid-item'><input type='submit' value='MC' name='MC' /></div>
                <div class='grid-item'><input type='submit' value='MR' name='MR' /></div>
                <div class='grid-item'><input type='submit' value='M+' name='M+' /></div>
                <div class='grid-item'><input type='submit' value='M-' name='M-' /></div>
                <div class='grid-item'><input type='submit' value='MS' name='MS' /></div>
                <div class='grid-item'><input type='submit' value='x&#178;' name='x^2' /></div>
                <div class='grid-item'><input type='submit' value='xⁿ' name='x^y' /></div>
                <div class='grid-item'><input type='submit' value='sin' name='sin' /></div>
                <div class='grid-item'><input type='submit' value='cos' name='cos' /></div>
                <div class='grid-item'><input type='submit' value='tan' name='tan' /></div>
                <div class='grid-item'><input type='submit' value='&#8730;' name='square' /></div>
                <div class='grid-item'><input type='submit' value='10ⁿ' name='10^x' /></div>
                <div class='grid-item'><input type='submit' value='log' name='log' /></div>
                <div class='grid-item'><input type='submit' value='Exp' name='Exp' /></div>
                <div class='grid-item'><input type='submit' value='Mod' name='Mod' /></div>
                <div class='grid-item'><input type='submit' value='↑' name='flecha' /></div>
                <div class='grid-item'><input type='submit' value='CE' name='ce' /></div>
                <div class='grid-item'><input type='submit' value='C' name='c' /></div>
                <div class='grid-item'><input type='submit' value='⇐' name='f_izq' /></div>
                <div class='grid-item'><input type='submit' value='/' name='division' /></div>
                <div class='grid-item'><input type='submit' value='&#960;' name='pi'/></div>
                <div class='grid-item'><input type='submit' value='7' name='siete' /></div>
                <div class='grid-item'><input type='submit' value='8' name='ocho' /></div>
                <div class='grid-item'><input type='submit' value='9' name='nueve' /></div>
                <div class='grid-item'><input type='submit' value='*' name='multiplicacion'/></div>
                <div class='grid-item'><input type='submit' value='n!' name='factorial' /></div>
                <div class='grid-item'><input type='submit' value='4' name='cuatro' /></div>
                <div class='grid-item'><input type='submit' value='5' name='cinco' /></div>
                <div class='grid-item'><input type='submit' value='6' name='seis' /></div>
                <div class='grid-item'><input type='submit' value='-' name='resta' /></div>
                <div class='grid-item'><input type='submit' value='&#177;' name='+-' /></div>
                <div class='grid-item'><input type='submit' value='1' name='uno' /></div>
                <div class='grid-item'><input type='submit' value='2' name='dos' /></div>
                <div class='grid-item'><input type='submit' value='3' name='tres' /></div>
                <div class='grid-item'><input type='submit' value='+' name='suma' /></div>
                <div class='grid-item'><input type='submit' value='(' name='(' /></div>
                <div class='grid-item'><input type='submit' value=')' name=')' /></div>
                <div class='grid-item'><input type='submit' value='0' name='cero' /></div>
                <div class='grid-item'><input type='submit' value=',' name='coma' /></div>
                <div class='grid-item'><input type='submit' value='=' name='igual' /></div>
            </div>
            </form>
        </div>";
       ?>
    </section>
    <footer>
        <p>Calculadora Cientifica creada para la asignatura SEW</p>
    </footer>
</body>
</html>