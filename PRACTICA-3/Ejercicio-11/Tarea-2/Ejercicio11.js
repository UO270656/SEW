class Geo {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
    }
    getPosicion(posicion){
        this.mensaje          ="peticion de geolocalizacion correcta";
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    } verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la peticion de geolocalizacion"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Informacion de geolocalizacion no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La peticion de geolocalizacion ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
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
        
        if(this.mensaje=="peticion de geolocalizacion correcta"){
        var datos=''; 
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
        }else{
            ubicacion.innerHTML = "<h2>"+this.mensaje+"</h2>"
        }
    }
}
var miPosicion = new Geo();