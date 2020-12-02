class Imagen {
    constructor () {   
		this.modo=1;
    }
    mostrar(){
		if(this.modo==1){
			$("#imagenIndex").hide();
			this.modo=0;
		}else{
			$("#imagenIndex").show();
			this.modo=1;
		}
    }
}
class Documento{
	constructor(){
		this.imagen=new Imagen();
		this.modoProta=true;
		this.modoTabla=false;
		this.pantalla1=true;
		this.pantalla2=false;
		this.pantalla3=false;
		this.actualizarBotones();
	}
	mostrarImagen(){
		this.imagen.mostrar();
	}
	cambiaP(){
		if(this.modoProta){
			$("#tituloProta").html("Rutger Hauer")
			$("#subtituloProta").html("Premios")
			$("#listaProta").html("<li>Globo de Oro 1987</li>"+
			"<li>Trayectoria en el International Short Film Festival de Montecatini</li>"+
			"<li>Golden Calf</li>"+
			"<li>Rembrandt Award</li>");
			this.modoProta=false;
		}else{
			$("#tituloProta").html("Harrison Ford")
			$("#subtituloProta").html("Otras peliculas")
			$("#listaProta").html("<li>Indiana Jones</li>"+
				"<li>Unico Testigo</li>"+
				"<li>El fugitivo</li>"+
				"<li>Star Wars</li>");
			this.modoProta=true;
		}
	}
	creameLaTabla(){
		if(this.modoTabla){
		var tabla = $("<div id='divisor'></div>").append("<table>"+
			"<thead>"+
				"<tr>"+
					"<th>Año</th>"+
					"<th>Título</th>"+
					"<th>Género</th>"+
					"<th>Desarrollador(es)</th>"+
					"<th>Plataforma(s)</th>"+
					"</tr>"+
			"</thead>"+
			"<tbody>"+
				"<tr>"+
					"<td>1985</td>"+
					"<td>Blade Runner</td>"+
					"<td>Shoot 'em up</td>"+
					"<td>Andy Stodart, Ian Foster e Ian Ellery</td>"+
					"<td>Commodore 64, ZX Spectrum y Amstrad CPC198​</td>"+
				"</tr>"+
				"<tr>"+
					"<td>1997</td>"+
					"<td>Blade Runner</td>"+
					"<td>Aventura gráfica</td>"+
					"<td>Westwood Studios</td>"+
					"<td>Microsoft Windows199</td>"+
				"</tr>"+
				"<tr>"+
					"<td>2017</td>"+
					"<td>Blade Runner 9732 (no oficial)</td>"+
					"<td>Realidad virtual</td>"+
					"<td>Quentin Lengele</td>"+
					"<td>HTC Vive</td>"+
				"</tr>"+
				"<tr>"+
					"<td>2018</td>"+
					"<td>Blade Runner: Revelations</td>"+
					"<td>Realidad virtual</td>"+
					"<td>Seismic Games y Alcon Media Group</td>"+
					"<td>Google Daydream</td>"+
				"</tr>"+
			"</tbody>"+
			"</table>");  // Crea un elemento con jQuery
        $("#h2Cambniante").after(tabla);
		this.modoTabla=false;
		}else{
			$("#divisor").remove();
			this.modoTabla=true;
		}
	}
	padres(){
		$("*", document.body).each(function() {
			var etiquetaPadre = $(this).parent().get(0).tagName;
			$(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
		});
	}
	coountTabla(){
		var countFilas=0;
		var countColumnas=0;
		$("table tr").each(function() {
            countFilas=countFilas+1;
		});
		$("thead tr th").each(function() {
            countColumnas=countColumnas+1;
        });
		alert( "En la tabla hay: " + countFilas+" filas y "+countColumnas+" columnas");
	}
	modificarPrincipal(){
		$("#divisor").remove();
		$("#h2Cambniante").html("Hablemos de Blade Runner")
		var texto = $("<div id='divisor'></div>").append("<p>Blade Runner es una película neo-noir y de ciencia ficción estadounidense dirigida por Ridley Scott, estrenada en 1982. "+
			"Fue escrita por Hampton Fancher y David Webb Peoples, y el reparto se compone de Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos, M. Emmet Walsh, Daryl Hannah, William Sanderson, Brion James, Joe Turkel y Joanna Cassidy. "+
			"Está basada parcialmente en la novela de Philip K. Dick ¿Sueñan los androides con ovejas eléctricas? (1968). Es la primera película de la franquicia Blade Runner."+
			"\n\nInicialmente Blade Runner recibió críticas mixtas de parte de la prensa especializada. Unos se mostraron confundidos y decepcionados de que no tuviese el ritmo narrativo que se esperaba de una película de acción, mientras otros apreciaban su ambientación y complejidad temática. "+
			"La película no obtuvo buenos resultados de taquilla en los cines norteamericanos, pero fue posteriormente revalorizada en el mercado doméstico hasta convertirse en una película de culto, siendo considerada una de las mejores películas de ciencia ficción y una precursora del género ciberpunk. "+
			"Fue candidata a dos Óscar (mejor dirección artística y mejores efectos visuales), ganó tres Premios BAFTA de ocho nominaciones, y la banda sonora compuesta por Vangelis fue nominada al Globo de Oro."+
			"\n\nLa acción transcurre en una versión distópica de la ciudad de Los Ángeles, EE. UU., durante el mes de noviembre de 2019. Describe un futuro en el que, mediante bioingeniería, se fabrican humanos artificiales denominados replicantes, a los que se emplea en trabajos peligrosos y como esclavos en las «colonias del mundo exterior» de la Tierra. "+
			"Fabricados por Tyrell Corporation para ser «más humanos que los humanos» —especialmente el modelo Nexus-6—, son indistinguibles físicamente de un humano, aunque tienen una mayor agilidad y fuerza física, y carecen teóricamente de la misma respuesta emocional y empática. "+
			"Los replicantes fueron declarados ilegales en la Tierra tras un sangriento motín ocurrido en una colonia exterior. Un cuerpo especial de la policía, los blade runners, se encarga de identificar, rastrear y matar —o «retirar», en términos de la propia policía— a los replicantes fugitivos que se encuentran en la Tierra. "+
			"Con un grupo de replicantes suelto en Los Ángeles, Rick Deckard, un «viejo» blade runner, es sacado de su semi-retiro para eliminarlos."+
			"</p>");
		$("#h2Cambniante").after(texto);
		this.pantalla1=true;
		this.pantalla2=false;
		this.pantalla3=false;
		this.actualizarBotones();
	}
	modificarProtagonista(){
		$("#divisor").remove();
		$("#h2Cambniante").html("Blade Runner: Protagonistas")
		var texto = $("<div id='divisor'></div>").append(
			"<h3 id='tituloProta'>Harrison Ford</h3>"+
			"<h4 id='subtituloProta'>Otras peliculas</h4>"+
			"<ol id='listaProta'>"+
				"<li>Indiana Jones</li>"+
				"<li>Unico Testigo</li>"+
				"<li>El fugitivo</li>"+
				"<li>Star Wars</li>"+
			"</ol>");
		$("#h2Cambniante").after(texto);
		this.pantalla1=false;
		this.pantalla2=true;
		this.pantalla3=false;
		this.actualizarBotones();
	}
	modificarMerchan(){
		$("#divisor").remove();
		$("#h2Cambniante").html("Blade Runner: Comics y Videojuegos");
		var tabla = $("<div id='divisor'></div>").append("<table id='tablaMerch'>"+
			"<thead>"+
				"<tr>"+
					"<th>Año</th>"+
					"<th>Título</th>"+
					"<th>Género</th>"+
					"<th>Desarrollador(es)</th>"+
					"<th>Plataforma(s)</th>"+
					"</tr>"+
			"</thead>"+
			"<tbody>"+
				"<tr>"+
					"<td>1985</td>"+
					"<td>Blade Runner</td>"+
					"<td>Shoot 'em up</td>"+
					"<td>Andy Stodart, Ian Foster e Ian Ellery</td>"+
					"<td>Commodore 64, ZX Spectrum y Amstrad CPC198​</td>"+
				"</tr>"+
				"<tr>"+
					"<td>1997</td>"+
					"<td>Blade Runner</td>"+
					"<td>Aventura gráfica</td>"+
					"<td>Westwood Studios</td>"+
					"<td>Microsoft Windows199</td>"+
				"</tr>"+
				"<tr>"+
					"<td>2017</td>"+
					"<td>Blade Runner 9732 (no oficial)</td>"+
					"<td>Realidad virtual</td>"+
					"<td>Quentin Lengele</td>"+
					"<td>HTC Vive</td>"+
				"</tr>"+
				"<tr>"+
					"<td>2018</td>"+
					"<td>Blade Runner: Revelations</td>"+
					"<td>Realidad virtual</td>"+
					"<td>Seismic Games y Alcon Media Group</td>"+
					"<td>Google Daydream</td>"+
				"</tr>"+
			"</tbody>"+
			"</table>");  // Crea un elemento con jQuery
		$("#h2Cambniante").after(tabla);
		this.pantalla1=false;
		this.pantalla2=false;
		this.pantalla3=true;
		this.actualizarBotones();
	}
	modificarLugares(){
		$("#divisor").remove();
		$("#h2Cambniante").html("Donde se rodó")
		var texto = $("<div id='divisor'></div>").append(
			"<p>Anque la mayoria de la pelicula se grabó en los estudios de Warner Bros en California,"+
			"algunas de las escenas mas emblematicas se grabaron el localizaciones exteriores como estas:</p>"+
			"<p></p>"+
			"<table id='tablaGeo'>"+
			"<tr>"+
			"<td><img src='multimedia/bradybury.jpg' id='imagenIndex' alt='Parque_black_park_(escena_unicornio)'>"+
			"<div id='bradybury'></div>"+ 
			"<p>En esta ubicación, el Bradbury Building de Los Ángeles, se grabaron los exteriores y el hall del piso de Sebastian</p></td>"+
			"</tr>"+
			"<tr>"+
			"<td><img src='multimedia/blackPark.jpg' id='imagenIndex' alt='Parque_black_park_(escena_unicornio)'>"+
			"<div id='mapa_black'></div>"+
			"<p>La secuencia del unicornio fue rodada la primera semana de enero de 1982 en el Black Park (Buckinghamshire), un parque cercano a los Shepperton Studios, estudios donde se grabó la posproducción.</p></td>"+
			"</tr>"+
			"<tr>"+
			"<td><img src='multimedia/irvine.jpg' id='imagenIndex' alt='Parque_black_park_(escena_unicornio)'>"+
			"<div id='irvine'></div>"+
			"<p>Otras locaciones en la ciudad de Los Ángeles incluyen el Irvine-Byrne Building —conocido posteriormente como Pan American Lofts— para el interior del Hotel Yukon, la Union Station como comisaría de policía, el 2nd Street Tunnel, y la Ennis House, donde se rodó el exterior de la casa de Deckard y que sirvió de inspiración para recrear los interiores de la misma.</p></td>"+
			"</tr>"+
			"</table>");
		$("#h2Cambniante").after(texto);
		this.getMapaEstaticoBury('bradybury');
		this.getMapaEstaticoBlack('mapa_black');
		this.getMapaEstaticoIrvine('irvine')
	}
	actualizarBotones(){
		if(this.pantalla1){
			$("#btn1").prop('disabled', false);
			$("#btn2").prop('disabled', true);
			$("#btn3").prop('disabled', true);
		}else if(this.pantalla2){
			$("#btn1").prop('disabled', true);
			$("#btn2").prop('disabled', false);
			$("#btn3").prop('disabled', true);
		}else{
			$("#btn1").prop('disabled', true);
			$("#btn2").prop('disabled', true);
			$("#btn3").prop('disabled', false);
		}
	}
	getMapaEstaticoBury(dondeVerlo){
        var ubicacion=document.getElementById(dondeVerlo);
        
        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
		var url = "https://maps.googleapis.com/maps/api/staticmap?";
        var centro = "center=" + 34.05055955345862 + "," + -118.24749251957593;
        var zoom ="&zoom=15";
        var tamaño= "&size=800x600";
        var marcador = "&markers=color:red%7Clabel:S%7C" + 34.05055955345862 + "," + -118.24749251957593;
        var sensor = "&sensor=false"; 
        
        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
        ubicacion.innerHTML = "<img src='"+this.imagenMapa+"' id='mapaFoto'/>";
	}
	getMapaEstaticoBlack(dondeVerlo){
        var ubicacion=document.getElementById(dondeVerlo);
        
        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
		var url = "https://maps.googleapis.com/maps/api/staticmap?";
        var centro = "center=" + 51.53862724359793 + "," + -0.5519004423298345;
        var zoom ="&zoom=15";
        var tamaño= "&size=800x600";
        var marcador = "&markers=color:red%7Clabel:S%7C" + 51.53862724359793 + "," + -0.5519004423298345;
        var sensor = "&sensor=false"; 
        
        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
        ubicacion.innerHTML = "<img src='"+this.imagenMapa+"' id='mapaFoto'/>";
	}
	getMapaEstaticoIrvine(dondeVerlo){
        var ubicacion=document.getElementById(dondeVerlo);
        
        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        var centro = "center=" + 34.05132796981656 + "," + -118.24840479734758;
        var zoom ="&zoom=15";
        var tamaño= "&size=800x600";
        var marcador = "&markers=color:red%7Clabel:S%7C" + 34.05132796981656 + "," + -118.24840479734758;
        var sensor = "&sensor=false"; 
        
        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
        ubicacion.innerHTML = "<img src='"+this.imagenMapa+"' id='mapaFoto'/>";
    }
}
var documento= new Documento();