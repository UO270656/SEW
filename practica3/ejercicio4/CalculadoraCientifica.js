class Calculadora {
	constructor(){
		this.resultado=document.getElementById("resultado");
		this.evaluable="";
		this.m=0.0;
		this.lastR=0;
		this.firstTime=true;
	}
	unos(){
		resultado.value = resultado.value + "1";
		this.evaluable=this.evaluable + "1";
	}
	does(){
		resultado.value = resultado.value + "2";
		this.evaluable=this.evaluable + "2";
	}
	treses(){
		resultado.value = resultado.value + "3";
		this.evaluable=this.evaluable + "3";
	}
	cuatros(){
		resultado.value = resultado.value + "4";
		this.evaluable=this.evaluable + "4";
	}
	cincos(){
		resultado.value = resultado.value + "5";
		this.evaluable=this.evaluable + "5";
	}
	seises(){
		resultado.value = resultado.value + "6";
		this.evaluable=this.evaluable + "6";
	}
	sietes(){
		resultado.value = resultado.value + "7";
		this.evaluable=this.evaluable + "7";
	}
	ochos(){
		resultado.value = resultado.value + "8";
		this.evaluable=this.evaluable + "8";
	}
	nueves(){
		resultado.value = resultado.value + "9";
		this.evaluable=this.evaluable + "9";
	}
	ceros(){
		resultado.value = resultado.value + "0";
		this.evaluable=this.evaluable + "0";
	}
	multip(){
		resultado.value = resultado.value + "*";
		this.evaluable=this.evaluable + "*";
	}
	divi(){
		resultado.value = resultado.value + "/";
		this.evaluable=this.evaluable + "/";
	}
	sumar(){
		resultado.value = resultado.value + "+";
		this.evaluable=this.evaluable + "+";
	}
	restar(){
		resultado.value = resultado.value + "-";
		this.evaluable=this.evaluable + "-";
	}
	clean(){
		resultado.value = "";
		this.evaluable="";
	}
	cleanAll(){
		this.clean();
		this.cleanM();
	}
	parentesisAbierto(){
		resultado.value = resultado.value + "(";
		this.evaluable=this.evaluable + "(";
	}
	parentesisCerrado(){
		resultado.value = resultado.value + ")";
		this.evaluable=this.evaluable + ")";
	}
	getM(){
		resultado.value = resultado.value + this.m;
	}
	mMenos(){
		this.m=this.m-parseFloat(resultado.value);
	}
	mMas(){
		var number=parseFloat(this.resultado.value)
		this.m=this.m+number;
	}
	cleanM(){
		this.m=0;
	}
	mAdd(){
		this.m=parseFloat(resultado.value);
	}
	result(){
		try{
			resultado.value =parseFloat(eval(this.evaluable).toFixed(6));
			this.evaluable=this.resultado.value;
			this.lastR=this.evaluable;
		}catch (error){
			resultado.value ="Su sintaxis no es valida";
		}
	}
	comas(){
		resultado.value = resultado.value + ".";
		this.evaluable=this.evaluable+".";
	}
	elevateTwo(){
		try{
			resultado.value = "(" +resultado.value + ")\u00B2";
			this.evaluable=parseFloat(eval(eval(this.evaluable)+"**2").toFixed(6));
		}catch (error){
			resultado.value ="Su sintaxis no es valida";
		}
	}
	elevateN(){
		try{
			resultado.value = "(" +resultado.value + ")^";
			this.evaluable=parseFloat(eval(this.evaluable).toFixed(6))+"**";
		}catch (error){
			resultado.value ="Su sintaxis no es valida";
		}
	}
	sin(){
		try{
			resultado.value = "sin(" +resultado.value + ")";
			this.evaluable=parseFloat(eval(Math.sin(eval(this.evaluable))).toFixed(6));
		}catch (error){
			resultado.value ="Su sintaxis no es valida";
		}
	}
	cos(){
		try{
			resultado.value = "cos(" +resultado.value + ")";
			this.evaluable=parseFloat(eval(Math.cos(eval(this.evaluable))).toFixed(6));
		}catch (error){
			resultado.value ="Su sintaxis no es valida";
		}
	}
	tan(){
		try{
			resultado.value = "tan(" +resultado.value + ")";
			this.evaluable=parseFloat(eval(Math.tan(eval(this.evaluable))).toFixed(6));
		}catch (error){
			resultado.value ="Su sintaxis no es valida";
		}
	}
	pi(){
		resultado.value = resultado.value + "\u03C0";
		this.evaluable=this.evaluable+3.141592653;
	}
	square(){
		try{
			resultado.value = "\u221A(" +resultado.value + ")";
			this.evaluable=parseFloat(eval(Math.sqrt(eval(this.evaluable))).toFixed(6));
		}catch (error){
			resultado.value ="Su sintaxis no es valida";
		}
	}
	expo(){
		try{
			resultado.value = "10^(" +resultado.value + ")";
			this.evaluable=parseFloat(eval("10**("+(eval(this.evaluable))+")").toFixed(6));
		}catch (error){
			resultado.value ="Su sintaxis no es valida";
		}
	}
	delete(){
		resultado.value=this.resultado.value.slice(0,-1);
		this.evaluable=this.evaluable.slice(0,-1);
	}
	lastResult(){
		resultado.value=this.lastR;
		this.evaluable=this.lastR;
	}
	logN(){
		try{
			resultado.value = "log(" +resultado.value + ")";
			this.evaluable=parseFloat(eval(Math.log(eval(this.evaluable))).toFixed(6));
		}catch (error){
			resultado.value ="Su sintaxis no es valida";
		}
	}
	factorial(){
			resultado.value = "(" +resultado.value + ")!";
			this.evaluable=parseFloat(eval(this.factorialRecursivo(eval(this.evaluable))).toFixed(6));

	}
	factorialRecursivo (n) { 
		if (n == 0){ 
			return 1; 
		}
		return n * this.factorialRecursivo (n-1); 
	}
	masMenos(){
		try{
			this.evaluable=parseFloat(eval(this.evaluable)).toFixed(6);
		}catch (error){
			resultado.value ="Su sintaxis no es valida";
		}
		if(this.evaluable>0){
			resultado.value = "-(" +resultado.value + ")";
			this.evaluable=0-this.evaluable;
		}else if(this.evaluable<0){
			resultado.value = "+(" +resultado.value + ")";
			this.evaluable=0-this.evaluable;
		}
	}
	exponente(){
		try{
			resultado.value = "(" +resultado.value + ")*10^";
			this.evaluable=eval(this.evaluable)+"*10**";
		}catch (error){
			resultado.value ="Su sintaxis no es valida";
		}
	}
	mod(){
		try{
			resultado.value = resultado.value + " Mod ";
			this.evaluable=eval(this.evaluable)+"%";
		}catch (error){
			resultado.value ="Su sintaxis no es valida";
		}
	}
}

var calculadora = new Calculadora();