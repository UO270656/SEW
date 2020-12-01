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
        this.placemarks=$('Document',e.currentTarget.result).find('Placemark');
        var nP = this.placemarks.length;
        for(var i = 0; i<nP;i++){
            var name=$('name',this.placemarks[i]).text();
            var coor=$('coordinates',this.placemarks[i]).text().split('\n');
            for(var j =0;j<coor.length;j++){
                var lnglatalt=coor[j].trim().split(',');
                console.log(lnglatalt);
                if(lnglatalt.length==3){
                    var x=new google.maps.Marker({
                        position: new google.maps.LatLng(parseFloat(lnglatalt[1]),parseFloat(lnglatalt[0])),
                        map: this.map,
                        title: name,
                    });
                }else if(lnglatalt.length==1){
                    var lnglatalt1=coor[j-1].trim().split(',');
                    var lnglatalt2=coor[j-2].trim().split(',');
                    var lnglatalt3=coor[j-3].trim().split(',');
                    var cordenatesLine = [{ lat: parseFloat(lnglatalt1[1]), lng: parseFloat(lnglatalt1[0])}
                    ,{ lat: parseFloat(lnglatalt2[1]), lng: parseFloat(lnglatalt2[0])}
                    ,{ lat: parseFloat(lnglatalt3[1]), lng: parseFloat(lnglatalt3[0])}];
                    var y= new google.maps.Polyline({
                        path: cordenatesLine,
                        geodesic: true,
                        strokeColor: "#FF0000",
                        strokeOpacity: 1.0,
                        strokeWeight: 2,
                    });
                    y.setMap(this.map);
                }
            }
        }
    }
}
var documento =  new Documento();