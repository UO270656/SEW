"use strict";
class Meteo {
    constructor(){
        this.apikey = "fb189e9f58ff017f07f403f11c23a0a8";
        this.ciudad = "Oviedo";
        this.tipo = "&mode=xml";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.correcto = "Â¡Todo correcto! XML recibido de <a href='https://openweathermap.org/'>OpenWeatherMap</a>"
    }
    cargarDatos(){
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function(datos){
                
                    //PresentaciÃ³n del archivo XML en modo texto
                    $("h5").text((new XMLSerializer()).serializeToString(datos));
                
                    //ExtracciÃ³n de los datos contenidos en el XML
                    var totalNodos            = $('*',datos).length; // cuenta los elementos de XML: son los nodos del Ã¡rbol DOM de XML
                    var ciudad                = $('city',datos).attr("name");
                    var longitud              = $('coord',datos).attr("lon");
                    var latitud               = $('coord',datos).attr("lat");
                    var pais                  = $('country',datos).text();
                    var amanecer              = $('sun',datos).attr("rise");
                    var minutosZonaHoraria    = new Date().getTimezoneOffset();
                    var amanecerMiliSeg1970   = Date.parse(amanecer);
                        amanecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                    var amanecerLocal         = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var oscurecer             = $('sun',datos).attr("set");          
                    var oscurecerMiliSeg1970  = Date.parse(oscurecer);
                        oscurecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                    var oscurecerLocal        = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var temperatura           = $('temperature',datos).attr("value");
                    var temperaturaMin        = $('temperature',datos).attr("min");
                    var temperaturaMax        = $('temperature',datos).attr("max");
                    var temperaturaUnit       = $('temperature',datos).attr("unit");
                    var humedad               = $('humidity',datos).attr("value");
                    var humedadUnit           = $('humidity',datos).attr("unit");
                    var presion               = $('pressure',datos).attr("value");
                    var presionUnit           = $('pressure',datos).attr("unit");
                    var velocidadViento       = $('speed',datos).attr("value");
                    var nombreViento          = $('speed',datos).attr("name");
                    var direccionViento       = $('direction',datos).attr("value");
                    var codigoViento          = $('direction',datos).attr("code");
                    var nombreDireccionViento = $('direction',datos).attr("name");
                    var nubosidad             = $('clouds',datos).attr("value");
                    var nombreNubosidad       = $('clouds',datos).attr("name");
                    var visibilidad           = $('visibility',datos).attr("value");
                    var precipitacionValue    = $('precipitation',datos).attr("value");
                    var precipitacionMode     = $('precipitation',datos).attr("mode");
                    var descripcion           = $('weather',datos).attr("value");
                    var icon                  = $('weather',datos).attr("icon");
                    var horaMedida            = $('lastupdate',datos).attr("value");
                    var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                        horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                    var horaMedidaLocal       = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                    var fechaMedidaLocal      = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");

                    var stringDatos = "<h2><img src='https://openweathermap.org/img/w/" + icon + ".png' alt='Weather icon'>Ciudad: " + ciudad + "</h2>";
						stringDatos += "<table><thead><tr><th>Datos</th><th>Valores</th></tr></thead>"
						stringDatos += "<tbody>"
                        stringDatos += "<tr><td>Pai­s: </td><td>" + pais + "</td></tr>";
                        stringDatos += "<tr><td>Latitud: </td><td>" + latitud + " grados</td></tr>";
                        stringDatos += "<tr><td>Longitud: </td><td>" + longitud + " grados</td></tr>";
                        stringDatos += "<tr><td>Temperatura: </td><td>" + temperatura + " grados Celsius</td></tr>";
                        stringDatos += "<tr><td>Temperatura maxima: </td><td>" + temperaturaMin + " grados Celsius</td></tr>";
                        stringDatos += "<tr><td>Temperatura mi­nima: </td><td>" + temperaturaMax + " grados Celsius</td></tr>";
                        stringDatos += "<tr><td>Presion: </td><td>" + presion + " milibares</td></tr>";
                        stringDatos += "<tr><td>Humedad: </td><td>" +humedad + " %</td></tr>";
                        stringDatos += "<tr><td>Amanece a las: </td><td>" + amanecerLocal + "</td></tr>";
                        stringDatos += "<tr><td>Oscurece a las: </td><td>" + oscurecerLocal + "</td></tr>";
                        stringDatos += "<tr><td>Direccion del viento: </td><td>" + direccionViento + " grados</td></tr>";
                        stringDatos += "<tr><td>Velocidad del viento: </td><td>" + velocidadViento + " metros/segundo</td></tr>";
                        stringDatos += "<tr><td>Hora de la medida: </td><td>" + horaMedidaLocal + "</td></tr>";
                        stringDatos += "<tr><td>Fecha de la medida: </td><td>" + fechaMedidaLocal + "</td></tr>";
                        stringDatos += "<tr><td>Descripcion: </td><td>" + descripcion + "</td></tr>";
                        stringDatos += "<tr><td>Visibilidad: </td><td>" + visibilidad + " metros</td></tr>";
                        stringDatos += "<tr><td>Nubosidad: </td><td>" + nubosidad + " %</td></tr></table>";
                    
                    $("div").html(stringDatos);                  
                },
            error:function(){
                $("h3").html("Â¡Tenemos problemas! No puedo obtener XML de <a href='https://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("h5").remove();
                $("p").remove();
                }
        });
    }
    crearElemento(tipoElemento, texto, insertarAntesDe){
        // Crea un nuevo elemento modificando el Ã¡rbol DOM
        // El elemnto creado es de 'tipoElemento' con un 'texto' 
        // El elemnto se coloca antes del elemnto 'insertarAntesDe'
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).after(elemento);
    }
    verXML(n){
		this.actualizaMeteo(n);
        this.crearElemento("div","","header"); // Crea un elemento con DOM para los datos obtenidos con XML
        this.cargarDatos();
        $("button").attr("disabled","disabled");
    }
    actualizaMeteo(n){
		$("div").remove();
		this.apikey = "fb189e9f58ff017f07f403f11c23a0a8";
		if(n==1){
			this.ciudad = "Oviedo";
		}else if(n==2){
			this.ciudad = "Villayón";
		}else{
			this.ciudad = "Lastres";
		}
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.correcto = "Â¡Todo correcto! XML recibido de <a href='https://openweathermap.org/'>OpenWeatherMap</a>"
	}
}
var meteo = new Meteo();