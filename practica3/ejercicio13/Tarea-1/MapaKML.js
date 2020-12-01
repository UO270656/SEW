class Documento{
    constructor(){
        if (window.File && window.FileReader && window.FileList && window.Blob){  
            //alert("Este navegador soporta el API File");
        }else {
            alert("¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!");
        }
        this.nombresTiposTamaños;
        this.j=0;
        this.src;
    }
    cargarFiles(){
        this.j=0;
        var nBytes = 0,
        archivos = document.getElementById("subirArchivos").files[0];
        nBytes += archivos.size;
        
        this.src=archivos;
        //document.getElementById("tamaño").innerHTML = nBytes + " bytes";
        this.initMap();
        //document.getElementById("nombres").innerHTML = this.nombresTiposTamaños;
    }
    initMap(){
         var map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(43.3672702, -5.8502461),
            zoom: 2,
            mapTypeId: 'terrain'
          });
  
          var kmlLayer = new google.maps.KmlLayer(this.src, {
            suppressInfoWindows: true,
            preserveViewport: false,
            map: map
          });
    }
    textoDocumento(e){
        $("#text"+this.j).append(document.createTextNode(e.currentTarget.result));
        this.j++;
    }
}
class DocumentoDeTexto{
    constructor(){
        this.i;
    }
    mostrarTexto(texto){
        var textoAAñadir=document.getElementById("#text"+i);
        textoAAñadir.innerHTML=lector.result;
    }
}
var documento =  new Documento();