<!DOCTYPE HTML>

<html lang="es">
<head>
    <!-- Datos que describen el documento -->
    <meta charset="UTF-8">
    <title>Calculadora PosFija</title>
    <meta name="Calculadora PosFija" CONTENT="Pagina web que simula una calculadora">
    <link rel="stylesheet" type="text/css" href="CalculadoraRPN.css">
</head>

<body>
    <header>
        <h1>SEW 2020</h1>
    </header>
    <section>
        <h2>Calculadora PosFija</h2>
        <p>Pagina web que simula una calculadora con todas las funciones básicas que la mayoría de las calculadoras tienen en notacion PosFija</p>
        <?php
            session_name('p4');
            session_start();
            class PilaLIFO { 
                public $pila;
	            public function __construct (){ 
		            $this->pila = array();
	            }
	            public function apilar($valor){
	            	array_unshift($this->pila, $valor);
	            }
	            public function desapilar(){
	            	return (array_shift($this->pila));
	            }
            }

            class Calculadora {
                public $resultado;
                protected $evaluable;
                protected $m;
                protected $lastR;
                public $pila;
	            public function __construct(){
		            $this->resultado="";
		            $this->evaluable="";
		            $this->m=0.0;
		            $this->lastR=0;
		            $this->pila=new PilaLIFO();
	            }
	            public function unos(){
		            $this->resultado = $this->resultado . "1";
		            $this->evaluable=$this->evaluable . "1";
	            }
	            public function does(){
		            $this->resultado = $this->resultado . "2";
		            $this->evaluable=$this->evaluable . "2";
	            }
	            public function treses(){
	            	$this->resultado = $this->resultado . "3";
	            	$this->evaluable=$this->evaluable . "3";
	            }
	            public function cuatros(){
	            	$this->resultado = $this->resultado . "4";
	            	$this->evaluable=$this->evaluable . "4";
	            }
	            public function cincos(){
	            	$this->resultado = $this->resultado . "5";
	            	$this->evaluable=$this->evaluable . "5";
	            }
	            public function seises(){
	            	$this->resultado = $this->resultado . "6";
	            	$this->evaluable=$this->evaluable . "6";
	            }
	            public function sietes(){
	            	$this->resultado = $this->resultado . "7";
	            	$this->evaluable=$this->evaluable . "7";
                }
                public function ochos(){
                    $this->resultado = $this->resultado . "8";
                    $this->evaluable=$this->evaluable . "8";
                }
                public function nueves(){
                    $this->resultado = $this->resultado . "9";
                    $this->evaluable=$this->evaluable . "9";
                }
                public function ceros(){
                    $this->resultado = $this->resultado . "0";
                    $this->evaluable=$this->evaluable . "0";
                }
                public function comas(){
                    $this->resultado = $this->resultado . ".";
                    $this->evaluable=$this->evaluable.".";
                }
                public function pi(){
                    $this->resultado = $this->resultado . "\u{03C0}";
                    $this->evaluable=$this->evaluable."3.141592653";
                }
                public function result(){
                    if($this->evaluable!=""){
                        $this->pila->apilar(floatval($this->evaluable));
                        $this->resultado = $this->resultado . "\n";
                        $this->evaluable="";
                    }
                }
                public function repaint(){
                    $this->resultado="";
                    for($i = 0; $i < count($this->pila->pila); ++$i) {
                        $this->resultado=$this->resultado.$this->pila->pila[$i]."\n";
                    }
                }
                public function multip(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $b=$this->pila->desapilar();
                        $this->evaluable=$b*$a;
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
                }
                public function divi(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $b=$this->pila->desapilar();
                        $this->evaluable=$b/$a;
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
                }
                public function sumar(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $b=$this->pila->desapilar();
                        $this->evaluable=$b+$a;
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
                }
                public function restar(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $b=$this->pila->desapilar();
                        $this->evaluable=$b-$a;
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
                }
                public function clean(){
                    $this->resultado = "";
                    $this->evaluable="";
                    $this->pila->pila=array();
                }
                public function elevateTwo(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $this->evaluable=$a**2;
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
                }
                public function elevateN(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $b=$this->pila->desapilar();
                        $this->evaluable=$b**$a;
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
                }
                public function sin(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $this->evaluable=sin($a);
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
                }
                public function cos(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $this->evaluable=cos($a);
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
                }
                public function tan(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $this->evaluable=tan($a);
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
                }
                public function square(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $this->evaluable=sqrt($a);
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
                }
                public function logN(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $this->evaluable=log($a);
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
                }
                public function factorial(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        if($a>=0&&$a%1==0){
                            $this->evaluable=$this->factorialRecursivo($a);
                            $this->repaint();
                            $this->resultado=$this->resultado.$this->evaluable;
                            $this->result();
                        }else{
                            $this->pila->apilar($a);
                            $this->resultado ="El factorial debe de ser de un numero natural";
                        }
                    }

                }
                public function factorialRecursivo ($n) { 
                    if ($n == 0){ 
                        return 1; 
                    }
                    return $n * $this->factorialRecursivo ($n-1); 
                }
                public function masMenos(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $this->evaluable=0-$a;
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
                }
                public function expo(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $b=$this->pila->desapilar();
                        $this->evaluable=$a*(10**$b);
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
                }
                public function mod(){
                    if($this->evaluable==""){
                        $a=$this->pila->desapilar();
                        $b=$this->pila->desapilar();
                        $this->evaluable=$b%$a;
                        $this->repaint();
                        $this->resultado=$this->resultado.$this->evaluable;
                        $this->result();
                    }
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
                if(isset($_POST['c'])) $calculadora->clean();
                if(isset($_POST['coma'])) $calculadora->comas();
                if(isset($_POST['multiplicacion'])) $calculadora->multip();
                if(isset($_POST['division'])) $calculadora->divi();
                if(isset($_POST['suma'])) $calculadora->sumar();
                if(isset($_POST['resta'])) $calculadora->restar();

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
            <textarea readonly class='scrollabletextbox' id='resultado'>$calculadora->resultado</textarea>
            <form action='#' method='post' name='botones'>
                <div class='grid-container'>
                    <div class='grid-item'><input type='submit' value='x&#178;' name='x^2' /></div>
                    <div class='grid-item'><input type='submit' value='xⁿ' name='x^y' /></div>
                    <div class='grid-item'><input type='submit' value='sin' name='sin' /></div>
                    <div class='grid-item'><input type='submit' value='cos' name='cos' /></div>
                    <div class='grid-item'><input type='submit' value='tan' name='tan' /></div>
                    <div class='grid-item'><input type='submit' value='&#8730;' name='square' /></div>
                    <div class='grid-item'><input type='submit' value='log' name='log' /></div>
                    <div class='grid-item'><input type='submit' value='Exp' name='Exp' /></div>
                    <div class='grid-item'><input type='submit' value='Mod' name='Mod' /></div>
                    <div class='grid-item'><input type='submit' value='/' name='division' /></div>
                    <div class='grid-item'><input type='submit' value='n!' name='factorial' /></div>
                    <div class='grid-item'><input type='submit' value='7' name='siete' /></div>
                    <div class='grid-item'><input type='submit' value='8' name='ocho' /></div>
                    <div class='grid-item'><input type='submit' value='9' name='nueve' /></div>
                    <div class='grid-item'><input type='submit' value='*' name='multiplicacion'/></div>
                    <div class='grid-item'><input type='submit' value='&#177;' name='+-' /></div>
                    <div class='grid-item'><input type='submit' value='4' name='cuatro' /></div>
                    <div class='grid-item'><input type='submit' value='5' name='cinco' /></div>
                    <div class='grid-item'><input type='submit' value='6' name='seis' /></div>
                    <div class='grid-item'><input type='submit' value='+' name='suma' /></div>
                    <div class='grid-item'><input type='submit' value='&#960;' name='pi'/></div>
                    <div class='grid-item'><input type='submit' value='1' name='uno' /></div>
                    <div class='grid-item'><input type='submit' value='2' name='dos' /></div>
                    <div class='grid-item'><input type='submit' value='3' name='tres' /></div>
                    <div class='grid-item'><input type='submit' value='-' name='resta' /></div>
                    <div class='grid-item'><input type='submit' value=',' name='coma' /></div>
                    <div class='grid-item'><input type='submit' value='C' name='c' /></div>
                    <div class='grid-item'><input type='submit' value='0' name='cero' /></div>
                    <div class='grid-item'><input type='submit' value='ENTER' name='igual' /></div>
                </div>
            </form>
        </div>";
        ?>
    </section>
    <footer>
        <p>Calculadora PosFija creada para la asignatura SEW</p>
    </footer>
</body>
</html>