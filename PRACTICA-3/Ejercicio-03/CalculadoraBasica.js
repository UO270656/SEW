class Calculadora {
	constructor(){
		this.resultado=document.getElementById("resultado");
		this.m=0.0;
	}
	unos(){
		resultado.value = resultado.value + "1";
	}
	does(){
		resultado.value = resultado.value + "2";
	}
	treses(){
		resultado.value = resultado.value + "3";
	}
	cuatros(){
		resultado.value = resultado.value + "4";
	}
	cincos(){
		resultado.value = resultado.value + "5";
	}
	seises(){
		resultado.value = resultado.value + "6";
	}
	sietes(){
		resultado.value = resultado.value + "7";
	}
	ochos(){
		resultado.value = resultado.value + "8";
	}
	nueves(){
		resultado.value = resultado.value + "9";
	}
	ceros(){
		resultado.value = resultado.value + "0";
	}
	multip(){
		resultado.value = resultado.value + "*";
	}
	divi(){
		resultado.value = resultado.value + "/";
	}
	sumar(){
		resultado.value = resultado.value + "+";
	}
	restar(){
		resultado.value = resultado.value + "-";
	}
	clean(){
		resultado.value = "";
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
	result(){
		try{
			var str = resultado.value;
			resultado.value =parseFloat(eval(str).toFixed(6));
		}catch (error){
			resultado.value ="Su sintaxis no es valida"
		}
	}
	comas(){
		resultado.value = resultado.value + ".";
	}
}

var calculadora = new Calculadora();