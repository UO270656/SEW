class Documento{
	constructor(){
		this.settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
			"method": "POST",
			"headers": {
			  "x-rapidapi-host": "google-translate1.p.rapidapi.com",
			  "x-rapidapi-key": "741cd7a7c1mshdd631319f0dbe25p196567jsna05bb7e4c5bf",
			  "content-type": "application/x-www-form-urlencoded"
			},
			"data": {
			  "source": "es",
			  "q": "Peliculas SEW 2020 | Reseña | Protagonistas | Comercialización",
			  "target": ""
			}
		}
		this.consulta="Peliculas SEW 2020 | Reseña | Protagonistas | Comercialización";
	}
	fetchTranslation(){

		$.ajax(this.settings).done(function (response) {
	  
		  console.log(response);
	  
			var translatedText = response.data.translations[0].translatedText;

			var comp = translatedText.split('|')

			$("#principalH1").html(comp[0]);
			$("#reseña").html(comp[1]);
			$("#protas").html(comp[2]);
			$("#comer").html(comp[3]);
			$("#h2Cambniante").html(comp[4]);
		});
	}
	onclick(opt){
		if(opt!="es"){
			this.settings.data.q=this.consulta+" | "+$("#h2Cambniante").html();
			this.settings.data.target = opt;
			this.fetchTranslation();
		}else{
			$("#principalH1").html("Peliculas SEW 2020");
			$("#reseña").html("Reseña");
			$("#protas").html("Protagonistas");
			$("#comer").html("Comercialización");
			$("#h2Cambniante").html("Hablemos de Blade Runner");
		}
	}
	modificarPrincipal(){
		$("div").remove();
		$("#h2Cambniante").html("Hablemos de Blade Runner")
		var texto = $("<div></div>").append("<p>Blade Runner es una película neo-noir y de ciencia ficción estadounidense dirigida por Ridley Scott, estrenada en 1982. "+
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
	}
	modificarProtagonista(){
		$("div").remove();
		$("#h2Cambniante").html("Blade Runner: Protagonistas")
		var texto = $("<div></div>").append(
		"<ol>"+
			"<li>Harrison Ford: el protagonista</a></li>"+
			"<li>Rutger Hauer: el villano</a></li>"+
			"<li>Sean Young</li>"+
			"<li>Edward James Olmos</li>"+
			"<li>Daryl Hannah</li>"+
		"</ol>");
		$("#h2Cambniante").after(texto);
	}
	modificarMerchan(){
		$("div").remove();
		$("#h2Cambniante").html("Blade Runner: Comics y Videojuegos");
		var tabla = $("<div></div>").append("<table>"+
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
	}
}
var documento= new Documento();