class PilaLIFO { 
	constructor (nombre){ 
		this.nombre = nombre;
		this.pila = new Array();
	}
	apilar(valor){
		this.pila.push(valor);
	}
	desapilar(){
		return (this.pila.pop());
	}
}

class Calculadora {
	constructor(){
		this.resultado=document.getElementById("resultado");
		this.evaluable="";
		this.m=0.0;
		this.lastR=0;
		this.pila=new PilaLIFO("PilaCalculadora");
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
	comas(){
		resultado.value = resultado.value + ".";
		this.evaluable=this.evaluable+".";
	}
	pi(){
		resultado.value = resultado.value + "\u03C0";
		this.evaluable=this.evaluable+3.141592653;
	}
	result(){
		if(this.evaluable!=""){
			this.pila.apilar(parseFloat(this.evaluable));
			resultado.value = resultado.value + "\n";
			this.evaluable="";
		}
	}
	repaint(){
		this.resultado.value="";
		for (var i in this.pila.pila) {
			this.resultado.value=this.resultado.value+this.pila.pila[i]+"\n";
		}
	}
	multip(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			var b=this.pila.desapilar();
			this.evaluable=b*a;
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
	divi(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			var b=this.pila.desapilar();
			this.evaluable=b/a;
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
	sumar(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			var b=this.pila.desapilar();
			this.evaluable=b+a;
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
	restar(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			var b=this.pila.desapilar();
			this.evaluable=b-a;
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
	clean(){
		resultado.value = "";
		this.evaluable="";
		this.pila.pila=new Array();
	}
	elevateTwo(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			this.evaluable=a**2;
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
	elevateN(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			var b=this.pila.desapilar();
			this.evaluable=b**a;
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
	sin(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			this.evaluable=Math.sin(a);
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
	cos(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			this.evaluable=Math.cos(a);
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
	tan(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			this.evaluable=Math.tan(a);
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
	square(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			this.evaluable=Math.sqrt(a);
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
	logN(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			this.evaluable=Math.log(a);
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
	factorial(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			if(a>=0&&a%1==0){
				this.evaluable=this.factorialRecursivo(a);
				this.repaint();
				this.resultado.value=this.resultado.value+this.evaluable;
				this.result();
			}else{
				this.pila.apilar(a);
				resultado.value ="El factorial debe de ser de un numero natural";
			}
		}

	}
	factorialRecursivo (n) { 
		if (n == 0){ 
			return 1; 
		}
		return n * this.factorialRecursivo (n-1); 
	}
	masMenos(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			this.evaluable=0-a;
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
	exponente(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			var b=this.pila.desapilar();
			this.evaluable=a*(10**b);
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
	mod(){
		if(this.evaluable==""){
			var a=this.pila.desapilar();
			var b=this.pila.desapilar();
			this.evaluable=b%a;
			this.repaint();
			this.resultado.value=this.resultado.value+this.evaluable;
			this.result();
		}
	}
}

var calculadora = new Calculadora();