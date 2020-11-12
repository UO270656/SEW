class Calculadora {
	constructor(){
		this.resultado=document.getElementById("resultado");
		this.m1=document.getElementById("m1");
		this.m2=document.getElementById("m2");
		this.m3=document.getElementById("m3");
		this.div=document.getElementById("division");
		this.mult=document.getElementById("multiplicacion");
		this.resta=document.getElementById("resta");
		this.suma=document.getElementById("suma");
		this.siete=document.getElementById("siete");
		this.ocho=document.getElementById("ocho");
		this.nueve=document.getElementById("nueve");
		this.cuatro=document.getElementById("cuatro");
		this.cinco=document.getElementById("cinco");
		this.seis=document.getElementById("seis");
		this.seis=document.getElementById("seis");
		this.uno=document.getElementById("uno");
		this.dos=document.getElementById("dos");
		this.tres=document.getElementById("tres");
		this.igual=document.getElementById("igual");
		this.limpiar=document.getElementById("limpiar");
		this.punto=document.getElementById("punto");
		this.cero=document.getElementById("cero");
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
		resultado.textContent = resultado.textContent + "+";
	}
	restar(){
		resultado.value = resultado.value + "-";
	}
	clean(){
		resultado.value = "";
	}
	result(){
		str = resultado.value;
		resultado.value = eval(str);
	}
	mMas(){
	
	}
	mMenos(){
	
	}
	mClean(){
	
	}
};
calculadora = new Calculadora();