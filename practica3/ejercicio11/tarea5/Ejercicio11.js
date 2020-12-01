
class MapaSEW{
    constructor(){
        this.infoWindow;
        this.mapaGeoposicionado;
    }
    initMap(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.fun1.bind(this.position), 
            this.handleLocationError.bind(true)
          );
        } else {
          // Browser doesn't support Geolocation
          this.handleLocationError(false);
        }
    }
    fun1(position){
      var centro = {lat: 43.3672702, lng: -5.8502461};
      var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'),{
      zoom: 8,
      center:centro,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      
      var infoWindow = new google.maps.InfoWindow;
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log(this);
        infoWindow.setPosition(pos);
        infoWindow.setContent('Localización encontrada');
        infoWindow.open(mapaGeoposicionado);
        mapaGeoposicionado.setCenter(pos);
    }
    handleLocationError(browserHasGeolocation) {
      var centro = {lat: 43.3672702, lng: -5.8502461};
      var pos = centro;
      var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'),{
      zoom: 8,
      center:centro,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      
      var infoWindow = new google.maps.InfoWindow;

        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: Ha fallado la geolocalizaciÃ³n' :
                              'Error: Su navegador no soporta geolocalizaciÃ³n');
        infoWindow.open(mapaGeoposicionado);
    }
}
var mapaDinamicoGoogle = new MapaSEW();