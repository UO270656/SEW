class Meteo {
    constructor(){
        this.apikey = "fb189e9f58ff017f07f403f11c23a0a8";
        this.ciudad = "Oviedo";
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.correcto = "Â¡Todo correcto! JSON recibido de <a href='http://openweathermap.org'>OpenWeatherMap</a>"
    }
    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                    $("pre").text(JSON.stringify(datos, null, 2));
                
                    //PresentaciÃ³n de los datos contenidos en JSON
                    
					var stringDatos = "<h2>Ciudad: " + datos.name + "</h2>";
						stringDatos += "<table><thead><tr><th>Datos</th><th>Valores</th></tr></thead>"
						stringDatos += "<tbody>"
                        stringDatos += "<tr><td>Pai­s: </td><td>" + datos.sys.country + "</td></tr>";
                        stringDatos += "<tr><td>Latitud: </td><td>" + datos.coord.lat + " grados</td></tr>";
                        stringDatos += "<tr><td>Longitud: </td><td>" + datos.coord.lon + " grados</td></tr>";
                        stringDatos += "<tr><td>Temperatura: </td><td>" + datos.main.temp + " grados Celsius</td></tr>";
                        stringDatos += "<tr><td>Temperatura maxima: </td><td>" + datos.main.temp_max + " grados Celsius</td></tr>";
                        stringDatos += "<tr><td>Temperatura mi­nima: </td><td>" + datos.main.temp_min + " grados Celsius</td></tr>";
                        stringDatos += "<tr><td>Presion: </td><td>" + datos.main.pressure + " milibares</td></tr>";
                        stringDatos += "<tr><td>Humedad: </td><td>" + datos.main.humidity + " %</td></tr>";
                        stringDatos += "<tr><td>Amanece a las: </td><td>" + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</td></tr>";
                        stringDatos += "<tr><td>Oscurece a las: </td><td>" + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</td></tr>";
                        stringDatos += "<tr><td>Direccion del viento: </td><td>" + datos.wind.deg + " grados</td></tr>";
                        stringDatos += "<tr><td>Velocidad del viento: </td><td>" + datos.wind.speed + " metros/segundo</td></tr>";
                        stringDatos += "<tr><td>Hora de la medida: </td><td>" + new Date(datos.dt *1000).toLocaleTimeString() + "</td></tr>";
                        stringDatos += "<tr><td>Fecha de la medida: </td><td>" + new Date(datos.dt *1000).toLocaleDateString() + "</td></tr>";
                        stringDatos += "<tr><td>Descripcion: </td><td>" + datos.weather[0].description + "</td></tr>";
                        stringDatos += "<tr><td>Visibilidad: </td><td>" + datos.visibility + " metros</td></tr>";
                        stringDatos += "<tr><td>Nubosidad: </td><td>" + datos.clouds.all + " %</td></tr></table>";
                    
                    $("p").html(stringDatos);
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("pre").remove();
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
    verJSON(n){
		this.actualizaMeteo(n);
        this.crearElemento("p","","header"); // Crea un elemento con DOM para los datos obtenidos con JSON
        this.cargarDatos();
        $("button").attr("disabled","disabled");
	}
	actualizaMeteo(n){
		$("p").remove();
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
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.correcto = "Â¡Todo correcto! JSON recibido de <a href='http://openweathermap.org'>OpenWeatherMap</a>"
	}
}
var meteo = new Meteo();