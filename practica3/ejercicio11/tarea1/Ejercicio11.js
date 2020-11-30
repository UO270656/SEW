class Geo {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
    }
    getPosicion(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }
    getLongitud(){
        return this.longitud;
    }
    getLatitud(){
        return this.latitud;
    }
    getAltitud(){
        return this.altitud;
    }
    verTodo(dondeVerlo){
        var ubicacion=document.getElementById(dondeVerlo);
        var datos='<h2>Geolocalizacion</h2>'; 
        datos+="<table><thead><tr><th>Datos</th><th>Valores</th></tr></thead>"
		datos+="<tbody>"
        datos+='<tr><td>Longitud: </td><td>'+this.longitud +' grados </td></tr>'; 
        datos+='<tr><td>Latitud: </td><td>'+this.latitud +' grados </td></tr>';
        datos+='<tr><td>PrecisiÃ³n de la latitud y longitud: </td><td>'+ this.precision +' metros </td></tr>';
        datos+='<tr><td>Altitud: </td><td>'+ this.altitude +' metros </td></tr>';
        datos+='<tr><td>PrecisiÃ³n de la altitud: </td><td>'+ this.precisionAltitud +' metros </td></tr>'; 
        datos+='<tr><td>Rumbo: </td><td>'+ this.rumbo +' grados </td></tr>'; 
        datos+='<tr><td>Velocidad: </td><td>'+ this.velocidad +' metros/segundo </td></tr></table>';
        ubicacion.innerHTML = datos;
    }
}
var miPosicion = new Geo();