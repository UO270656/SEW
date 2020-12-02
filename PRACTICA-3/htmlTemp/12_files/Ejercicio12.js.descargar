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
        archivos = document.getElementById("subirArchivos").files,
        nArchivos = archivos.length;
        for (var i = 0; i < nArchivos; i++) {
            nBytes += archivos[i].size;
        }
        this.nombresTiposTamaños="";
        for (var i = 0; i < nArchivos; i++) {
            if(archivos[i].type==""){
                this.nombresTiposTamaños += "<table><tr><th>Archivo[" + i +"] </th><td>"+ archivos[i].name  + "</td></tr><tr><th>Tamaño: </th><td>" + archivos[i].size +" bytes </td></tr><tr><th>" + " Tipo: </th><td> Unknown </td></tr><tr><th> Ultima modificacion: </th><td>"+archivos[i].lastModifiedDate+"</td></tr>" ;
            }else{
                this.nombresTiposTamaños += "<table><tr><th>Archivo[" + i +"] </th><td>"+ archivos[i].name  + "</td></tr><tr><th>Tamaño: </th><td>" + archivos[i].size +" bytes </td></tr><tr><th>" + " Tipo: </th><td>" + archivos[i].type+"</td></tr><tr><th> Ultima modificacion: </th><td>"+archivos[i].lastModifiedDate+"</td></tr>" ;
            }
            var tipoTexto = /text.*/;
            var tipoJson = "/*.json/";
            if (archivos[i].type.match(tipoTexto)||archivos[i].type==="application/json"){
                this.nombresTiposTamaños += "<tr><th> Contenido </th><td id='text"+i+"'> ";
                var lector = new FileReader();
                lector.onload = this.textoDocumento.bind(this);  
               /*  lector.onload = function (evento) {
                  //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
                  //La propiedad "result" es donde se almacena el contenido del archivo
                  //Esta propiedad solamente es válida cuando se termina la operación de lectura
                  documento.docn.mostrarTexto(lector.result);
                }    */   
                this.nombresTiposTamaños += " </td></tr> ";
                lector.readAsText(archivos[i]);
            }
            this.nombresTiposTamaños+="</table>";
        }

        document.getElementById("tamaño").innerHTML = nBytes + " bytes";
        document.getElementById("nombres").innerHTML = this.nombresTiposTamaños;
    }
    cargarArchivo(){

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