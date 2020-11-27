class Calculadora {
	constructor(){
		this.resultado=document.getElementById("resultado");
		this.modo=1;//Por defecto DEC=1 //DEC=1, HEX=2, BIN=3, OCT=4
		this.btnDec=document.getElementById("decimal");
		this.btnHex=document.getElementById("hexadecimal");
		this.btnBin=document.getElementById("binario");
		this.btnOct=document.getElementById("octagesimal");
		
		this.btnDec.disabled =true;
	}
	unos(){
		this.resultado.value = this.resultado.value + "1";
	}
	does(){
		if(this.modo!=3)
			this.resultado.value = this.resultado.value + "2";
	}
	treses(){
		if(this.modo!=3)
			this.resultado.value = this.resultado.value + "3";
	}
	cuatros(){
		if(this.modo!=3)
			this.resultado.value = this.resultado.value + "4";
	}
	cincos(){
		if(this.modo!=3)
			this.resultado.value = this.resultado.value + "5";
	}
	seises(){
		if(this.modo!=3)
			this.resultado.value = this.resultado.value + "6";
	}
	sietes(){
		if(this.modo!=3)
			this.resultado.value = this.resultado.value + "7";
	}
	ochos(){
		if(this.modo==1||this.modo==2)
			this.resultado.value = this.resultado.value + "8";
	}
	nueves(){
		if(this.modo==1||this.modo==2)
			this.resultado.value = this.resultado.value + "9";
	}
	ceros(){
		this.resultado.value = this.resultado.value + "0";
	}
	aes(){
		if(this.modo==2){
			this.resultado.value = this.resultado.value + "A";
		}
	}
	bes(){
		if(this.modo==2){
			this.resultado.value = this.resultado.value + "B";
		}
	}
	ces(){
		if(this.modo==2){
			this.resultado.value = this.resultado.value + "C";
		}
	}
	des(){
		if(this.modo==2){
			this.resultado.value = this.resultado.value + "D";
		}
	}
	es(){
		if(this.modo==2){
			this.resultado.value = this.resultado.value + "E";
		}
	}
	efes(){
		if(this.modo==2){
			this.resultado.value = this.resultado.value + "F";
		}
	}
	parentesisAbierto(){
		this.resultado.value = this.resultado.value + "(";
	}
	parentesisCerrado(){
		this.resultado.value = this.resultado.value + ")";
	}
	clean(){
		this.resultado.value = "";
	}
	dec(){
		if(this.resultado.value!=""){
			if(this.modo==2){
				var n=parseInt(this.resultado.value,16);
				this.resultado.value=n;
			}else if(this.modo==3){
				var n=parseInt(this.resultado.value,2);
				this.resultado.value=n;
			}else if(this.modo==4){
				var n=parseInt(this.resultado.value,8);
				this.resultado.value=n;
			}
			this.modo=1;
			this.btnDec.disabled =true;
			this.btnHex.disabled=false;
			this.btnBin.disabled=false;
			this.btnOct.disabled=false;
		}
	}
	hex(){
		if(this.resultado.value!=""){
			if(this.modo==1){
				var n=parseInt(this.resultado.value);
				this.resultado.value=n.toString(16);
			}else if(this.modo==3){
				var n=parseInt(this.resultado.value,2);
				this.resultado.value=n.toString(16);
			}else if(this.modo==4){
				var n=parseInt(this.resultado.value,8);
				this.resultado.value=n.toString(16);
			}
			this.modo=2;
			this.btnDec.disabled =false;
			this.btnHex.disabled=true;
			this.btnBin.disabled=false;
			this.btnOct.disabled=false;
		}
	}
	bin(){
		if(this.resultado.value!=""){
			if(this.modo==1){
				var n=parseInt(this.resultado.value);
				this.resultado.value=n.toString(2);
			}else if(this.modo==2){
				var n=parseInt(this.resultado.value,16);
				this.resultado.value=n.toString(2);
			}else if(this.modo==4){
				var n=parseInt(this.resultado.value,8);
				this.resultado.value=n.toString(2);
			}
			this.modo=3;
			this.btnDec.disabled =false;
			this.btnHex.disabled=false;
			this.btnBin.disabled=true;
			this.btnOct.disabled=false;
		}
	}
	oct(){
		if(this.resultado.value!=""){
			if(this.modo==1){
				var n=parseInt(this.resultado.value);
				this.resultado.value=n.toString(8);
			}else if(this.modo==2){
				var n=parseInt(this.resultado.value,16);
				this.resultado.value=n.toString(8);
			}else if(this.modo==3){
				var n=parseInt(this.resultado.value,2);
				this.resultado.value=n.toString(8);
			}
			this.modo=4;
			this.btnDec.disabled =false;
			this.btnHex.disabled=false;
			this.btnBin.disabled=false;
			this.btnOct.disabled=true;
		}
	}
}
var calculadora = new Calculadora();