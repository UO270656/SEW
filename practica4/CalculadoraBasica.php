class Calculadora {
	protected $m;
	protected $resultado;
}

$expresion       = "";
$resultado       = "";

$formularioPOST  = "";

if(count($_POST)>0){
	$formularioPOST = $_POST
}