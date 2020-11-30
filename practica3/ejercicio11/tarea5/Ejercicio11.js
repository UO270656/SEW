
class MapaSEW{
    constructor(){
        this.infoWindow;
        this.mapaGeoposicionado;
    }
    initMap(){
        var centro = {lat: 43.3672702, lng: -5.8502461};
        this.mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'),{
        zoom: 8,
        center:centro,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    
        this.infoWindow = new google.maps.InfoWindow;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.fun1(this.position), function() {
            this.handleLocationError(true, infoWindow, mapaGeoposicionado.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          this.handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
        }
    }
    fun1(position){
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude};
        this.infoWindow.setPosition(pos);
        this.infoWindow.setContent('LocalizaciÃ³n encontrada');
        this.infoWindow.open(mapaGeoposicionado);
        this.mapaGeoposicionado.setCenter(pos);
    }
    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: Ha fallado la geolocalizaciÃ³n' :
                              'Error: Su navegador no soporta geolocalizaciÃ³n');
        infoWindow.open(mapaGeoposicionado);
    }
}
var mapaDinamicoGoogle = new MapaSEW();