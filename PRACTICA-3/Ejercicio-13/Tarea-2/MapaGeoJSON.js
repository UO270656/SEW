class Documento{
    constructor(){
        if (window.File && window.FileReader && window.FileList && window.Blob){  
            //alert("Este navegador soporta el API File");
        }else {
            alert("¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!");
        }
        this.nombresTiposTamaños;
        this.j=0;
    }
    cargarFiles(){
        this.j=0;
        var nBytes = 0,
        archivos = document.getElementById("subirArchivos").files[0];
        nBytes += archivos.size;
        var lector = new FileReader();
        lector.onload = this.textoDocumento.bind(this);  
        lector.readAsText(archivos);

    }
    initMap(){
        this.map = new google.maps.Map(document.getElementById('map'), {
           center: new google.maps.LatLng(43.3672702, -5.8502461),
           zoom: 9,
           mapTypeId: 'terrain'
         });
   }
    textoDocumento(e){
        this.initMap();
        var geoJoson=JSON.parse(e.currentTarget.result);
        this.map.data.addGeoJson(geoJoson);
        this.features=geoJoson['features'];
        for(var i=0;i<this.features.length;i++){
            for(var j=0;j<3;j++){
                console.log();
                var x=new google.maps.Marker({
                    position: new google.maps.LatLng(parseFloat(this.features[i]['geometry']['coordinates'][j][1]),parseFloat(this.features[i]['geometry']['coordinates'][j][0])),
                    map: this.map,
                    title: name,
                });
            }
        }
        
    }
}
var documento =  new Documento();