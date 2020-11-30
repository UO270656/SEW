class Imagen {
    constructor () {   
		this.modo=1;
		var canvas = document.getElementById("myCanvas");
  		var ctx = canvas.getContext("2d");
  		var img = document.getElementById("imagenCanvas");
  		ctx.drawImage(img, 0, 0, 50, 50);
    }
    mostrar(){
		if(this.modo==1){
			$("#imagenCanvas").hide();
			this.modo=1;
		}else{
			$("#imagenCanvas").show();
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
		this.mostrarImagen();
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
		var texto = $("<div id='divisor'></div>").append("<img src='multimedia/encabezado.jpg' id='imagenIndex' alt='Poster_promocionario_de_la_pelicula' onclick='documento.cambiarFoco(this)'><p>Blade Runner es una película neo-noir y de ciencia ficción estadounidense dirigida por Ridley Scott, estrenada en 1982. "+
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
			"<td><img src='multimedia/bradybury.jpg' id='imagenIndex' alt='Edificio_Bradbury_en_los_Angeles' onclick='documento.cambiarFoco(this)'>"+
			"<div id='bradybury'></div>"+ 
			"<p>En esta ubicación, el Bradbury Building de Los Ángeles, se grabaron los exteriores y el hall del piso de Sebastian</p></td>"+
			"</tr>"+
			"<tr>"+
			"<td><img src='multimedia/blackPark.jpg' id='imagenIndex' alt='Parque_black_park_(escena_unicornio)' onclick='documento.cambiarFoco(this)'>"+
			"<div id='mapa_black'></div>"+
			"<p>La secuencia del unicornio fue rodada la primera semana de enero de 1982 en el Black Park (Buckinghamshire), un parque cercano a los Shepperton Studios, estudios donde se grabó la posproducción.</p></td>"+
			"</tr>"+
			"<tr>"+
			"<td><img src='multimedia/irvine.jpg' id='imagenIndex' alt='Edificio_Irvine_Byrne_en_los_Angeles' onclick='documento.cambiarFoco(this)'>"+
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
        ubicacion.innerHTML = "<img src='"+this.imagenMapa+"' id='mapaFoto'/ onclick='documento.cambiarFoco(this)'>";
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
        ubicacion.innerHTML = "<img src='"+this.imagenMapa+"' id='mapaFoto' onclick='documento.cambiarFoco(this)'/>";
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
        ubicacion.innerHTML = "<img src='"+this.imagenMapa+"' id='mapaFoto' onclick='documento.cambiarFoco(this)'/>";
	}
	modificarBeneficios(){
		$("#divisor").remove();
		$("#h2Cambniante").html("Blade Runner: Beneficios")
		var texto = $("<div id='divisor'></div>").append("<p>La inversión de esta pelicula fue elevada, pues se esperaban grandes cifras, pero no le gusto a la audiencia</p>"
		+"<svg width='800' height='600' xmlns='http://www.w3.org/2000/svg'>"+
        "<g>"+
         "<title>background</title>"+
         "<rect fill='#fff' id='canvas_background' height='602' width='802' y='-1' x='-1'/>"+
         "<g display='none' overflow='visible' y='0' x='0' height='100%' width='100%' id='canvasGrid'>"+
		 "<rect fill='url(#gridpattern)' stroke-width='0' y='0' x='0' height='100%' width='100%'/>"+
		  "</g>"+
		 "</g>"+
        "<g>"+
         "<title>Layer 1</title>"+
         "<rect id='svg_1' height='343' width='555' y='98.45313' x='149.5' stroke-width='1.5' stroke='#000' fill='#fff'/>"+
         "<rect stroke='#000' id='svg_4' height='188.00001' width='66' y='252.45312' x='332.5' stroke-opacity='null' stroke-width='1.5' fill='#bf0000'/>"+
         "<rect stroke='#000' id='svg_5' height='102.00002' width='66' y='339.45311' x='180.5' stroke-opacity='null' stroke-width='1.5' fill='#ff0000'/>"+
         "<text stroke='#000' transform='matrix(0.594995617866516,0,0,0.48148149251937866,95.89293164014816,220.97568982560188) ' xml:space='preserve' text-anchor='start' font-family='Helvetica, Arial, sans-serif' font-size='24' id='svg_6' y='515.22235' x='90.09658' stroke-opacity='null' stroke-width='0' fill='#ff0000'>coste de producción</text>"+
         "<text stroke='#000' transform='matrix(0.6618109345436096,0,0,0.48148149251937866,137.94943348132074,228.90161549765617) ' xml:space='preserve' text-anchor='start' font-family='Helvetica, Arial, sans-serif' font-size='24' id='svg_7' y='502.91466' x='235.03777' stroke-opacity='null' stroke-width='0' fill='#bf0000'>coste total (+ marketing)</text>"+
         "<text xml:space='preserve' text-anchor='start' font-family='Helvetica, Arial, sans-serif' font-size='24' id='svg_8' y='344.45313' x='39.5' stroke-opacity='null' stroke-width='0' stroke='#000' fill='#000000'>150 mill.</text>"+
         "<text xml:space='preserve' text-anchor='start' font-family='Helvetica, Arial, sans-serif' font-size='24' id='svg_9' y='255.45313' x='39.5' stroke-opacity='null' stroke-width='0' stroke='#000' fill='#000000'>241 mill.</text>"+
         "<text stroke='#000' transform='matrix(0.615437924861908,0,0,0.5185185074806213,283.16387173254043,214.95891696494073) ' xml:space='preserve' text-anchor='start' font-family='Helvetica, Arial, sans-serif' font-size='24' id='svg_10' y='495.45313' x='486.37908' stroke-opacity='null' stroke-width='0' fill='#aaffaa'>beneficio esperado</text>"+
         "<text stroke='#000' transform='matrix(0.5867352485656738,0,0,0.5925925970077515,253.02780132740736,180.25867860205472) ' xml:space='preserve' text-anchor='start' font-family='Helvetica, Arial, sans-serif' font-size='24' id='svg_11' y='493.14062' x='385.98704' stroke-opacity='null' stroke-width='0' fill='#00ff00'>beneficio real</text>"+
         "<rect stroke='#000' id='svg_12' height='316' width='75' y='125.45312' x='598.5' stroke-opacity='null' stroke-width='1.5' fill='#d4ffaa'/>"+
         "<rect id='svg_14' height='231' width='83' y='209.45313' x='479.5' stroke-opacity='null' stroke-width='1.5' stroke='#000' fill='#7fff00'/>"+
         "<text xml:space='preserve' text-anchor='start' font-family='Helvetica, Arial, sans-serif' font-size='24' id='svg_17' y='213.45313' x='38.5' fill-opacity='null' stroke-opacity='null' stroke-width='0' stroke='#000' fill='#000000'>260 mill.</text>"+
         "<text stroke='#000' xml:space='preserve' text-anchor='start' font-family='Helvetica, Arial, sans-serif' font-size='24' id='svg_18' y='134.45313' x='39.5' fill-opacity='null' stroke-opacity='null' stroke-width='0' fill='#000000'>440 mill.</text>"+
         "<line stroke-linecap='null' stroke-linejoin='null' id='svg_19' y2='125.45313' x2='704.5' y1='126.45313' x1='149.5' fill-opacity='null' stroke-opacity='null' stroke-width='1.5' stroke='#000' fill='none'/>"+
         "<line stroke-linecap='null' stroke-linejoin='null' id='svg_20' y2='210.45313' x2='149.5' y1='210.45313' x1='704.5' fill-opacity='null' stroke-opacity='null' stroke-width='1.5' stroke='#000' fill='none'/>"+
         "<line stroke-linecap='null' stroke-linejoin='null' id='svg_21' y2='251.45313' x2='703.5' y1='251.45313' x1='148.5' fill-opacity='null' stroke-opacity='null' stroke-width='1.5' stroke='#000' fill='none'/>"+
         "<line stroke-linecap='null' stroke-linejoin='null' id='svg_22' y2='341.45313' x2='705.5' y1='339.45313' x1='149.5' fill-opacity='null' stroke-opacity='null' stroke-width='1.5' stroke='#000' fill='none'/>"+
        "</g>"+
       "</svg>");
		$("#h2Cambniante").after(texto);
		this.pantalla1=false;
		this.pantalla2=true;
		this.pantalla3=false;
		this.actualizarBotones();
	}
	cambiarFoco(e){
		e.requestFullscreen();
	}
	drawImagenEncabezado(){
		var c = document.getElementById("myCanvas");
  		var ctx = c.getContext("2d");
  		var img = document.getElementById("scream");
  		ctx.drawImage(img, 10, 10);
	}
}
var documento= new Documento();