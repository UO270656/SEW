<!DOCTYPE HTML>

<html lang="es">
<head>
    <!-- Datos que describen el documento -->
    <meta charset="UTF-8">
    <title>Ejercicio 7</title>
    <META name="Ejercicio 7" CONTENT="Ejercicio 7">
    <link rel="stylesheet" type="text/css" href="Ejercicio7.css">
</head>

<body>
    <?php
        session_name('p74');
        session_start();
        class BaseDatos{
            public $modo;
            public $create;
            public $db;
            protected $servername;
            protected $username;
            protected $password;
            protected $database;
            public $informe;
            public function __construct (){ 
                $this->modo=0;
                $this->create=false;
                $this->servername = "localhost";
                $this->username = "DBUSER2020";
                $this->password = "DBPSWD2020";
                $this->database = "ejercicio7";
                $this->informe=array();
            }
            public function iniciar(){
                $this->createBD();
                $this->createTable();
            }
            public function createBD(){
                $this->db = new mysqli($this->servername,$this->username,$this->password);
                if($this->db->connect_error) {
                    exit ("<p>ERROR de conexión:".$this->db->connect_error."</p>");  
                } else {echo "<p>Conexión establecida con " . $this->db->host_info . "</p>";}
           
                // Se crea la base de datos de trabajo "agenda" utilizando ordenación en español
                $cadenaSQL = "CREATE DATABASE IF NOT EXISTS $this->database COLLATE utf8_spanish_ci";
                if($this->db->query($cadenaSQL) === TRUE){
                    echo "<p>Base de datos '$this->database' creada con éxito</p>";
                    $this->create=true;
                } else { 
                    echo "<p>ERROR en la creación de la Base de Datos '$this->database'. Error: " . $this->db->error . "</p>";
                    exit();
                }   
                $this->db->close();  
            }
            public function createTable(){
                if($this->create){
        
                    // Conexión al SGBD local con XAMPP con el usuario creado 
                    $this->db = new mysqli($this->servername,$this->username,$this->password);
                                
                    //selecciono la base de datos AGENDA para utilizarla
                    $this->db->select_db($this->database);
        
                    // se puede abrir y seleccionar a la vez
                    //$db = new mysqli($servername,$username,$password,$database);
        
                    //Crear la tabla persona DNI, Nombre, Apellido
                    $crearTabla = "CREATE TABLE IF NOT EXISTS actores (ID_A VARCHAR(9) NOT NULL 
                    , Nombre VARCHAR(20) NOT NULL 
                    , Apellidos VARCHAR(40) NOT NULL 
                    , Edad INT NOT NULL 
                    , Sexo ENUM('Masculino','Femenino','Otro') NOT NULL 
                    , PRIMARY KEY (ID_A))";
                            
                    if($this->db->query($crearTabla) === TRUE){
                        echo "<p>Tabla 'actores' creada con éxito </p>";
                    } else { 
                        echo "<p>ERROR en la creación de la tabla actores. Error : ". $this->db->error . "</p>";
                        exit();
                    }   
                    $this->db->select_db($this->database);
                    $crearTabla = "CREATE TABLE IF NOT EXISTS peliculas (ID_P VARCHAR(9) NOT NULL 
                    , Nombre VARCHAR(20) NOT NULL 
                    , Año INT NOT NULL 
                    , Valoracion INT NOT NULL 
                    , PRIMARY KEY (ID_P))";
                            
                    if($this->db->query($crearTabla) === TRUE){
                        echo "<p>Tabla 'peliculas' creada con éxito </p>";
                    } else { 
                        echo "<p>ERROR en la creación de la tabla peliculas. Error : ". $this->db->error . "</p>";
                        exit();
                    } 
                    $this->db->select_db($this->database);
                    $crearTabla = "CREATE TABLE IF NOT EXISTS peliculas_actores (ID_A VARCHAR(9) NOT NULL 
                    , ID_P VARCHAR(9) NOT NULL
                    , Personaje VARCHAR(40) NOT NULL 
                    , PRIMARY KEY (ID_A,ID_P)
                    , FOREIGN KEY (ID_A) REFERENCES actores(ID_A)
                    , FOREIGN KEY (ID_P) REFERENCES peliculas(ID_P))";
                            
                    if($this->db->query($crearTabla) === TRUE){
                        echo "<p>Relacion 'peliculas_actores' creada con éxito </p>";
                    } else { 
                        echo "<p>ERROR en la creación de la tabla peliculas_actores. Error : ". $this->db->error . "</p>";
                        exit();
                    } 
                    $this->db->close();   
                }else{
                    echo "<p>ERROR la BD no ha sido creada</p>";
                }
            }public function searchName(){
                $this->db = new mysqli($this->servername,$this->username,$this->password,$this->database);

                // comprueba la conexion
                if($this->db->connect_error) {
                    exit ("<h2>ERROR de conexión:".$this->db->connect_error."</h2>");  
                }
                    //prepara la sentencia de inserción
                    $consultaPre = $this->db->query("SELECT * FROM actores WHERE Nombre = '".$_POST["NAME"]."'");  

                    $row=$consultaPre->fetch_assoc();
                    if($row!=null){
                        echo "<p>Nombre: " . $row['Nombre']. ", Apellidos: ". $row['Apellidos'].", Edad: ". $row['Edad'].", Sexo: ". $row['Sexo']."</p>";
                        $id=$row['ID_A'];

                        $consultaPre->close();

                        $consultaPre = $this->db->query("SELECT * FROM peliculas_actores WHERE ID_A ='$id'");  

                        while($row=$consultaPre->fetch_assoc()){
                            $consultaPre2 = $this->db->query("SELECT * FROM peliculas WHERE ID_P ='".$row['ID_P']."'");
                            $row2=$consultaPre2->fetch_assoc();
                            if($row2!=null){
                                echo "<ul><li>Titulo: " . $row2['Nombre']. "</li><li>Personaje: ". $row['Personaje']."</li></ul>";
                                $consultaPre2->close();
                            }else{
                                echo "<p>No hay datos de peliculas</p>";
                            }
                        }

                        $consultaPre->close();
                        //cierra la base de datos
                    }else{
                        echo "<p>No hay datos</p>";
                    }
                    $this->db->close();
            }public function searchTitle(){
                $this->db = new mysqli($this->servername,$this->username,$this->password,$this->database);

                // comprueba la conexion
                if($this->db->connect_error) {
                    exit ("<h2>ERROR de conexión:".$this->db->connect_error."</h2>");  
                } else {}
    
                //prepara la sentencia de Titl
                $consultaPre = $this->db->query("SELECT * FROM peliculas WHERE Nombre = '".$_POST["NAME"]."'");  

                $row=$consultaPre->fetch_assoc();
                if($row!=null){
                    echo "<p>Titulo: " . $row['Nombre']. ", Año: ". $row['Año'].", Valoracion: ". $row['Valoracion']."</p>";
                    $id=$row['ID_P'];

                    $consultaPre->close();

                    $consultaPre = $this->db->query("SELECT * FROM peliculas_actores WHERE ID_P ='$id'");  

                    while($row=$consultaPre->fetch_assoc()){
                        $consultaPre2 = $this->db->query("SELECT * FROM actores WHERE ID_A ='".$row['ID_A']."'");
                        $row2=$consultaPre2->fetch_assoc();
                        if($row2!=null){
                            echo "<ul><li>Nombre: " . $row2['Nombre']. "</li><li>Personaje: ". $row['Personaje']."</li></ul>";
                            $consultaPre2->close();
                        }else{
                            echo "<p>No hay datos de actores</p>";
                        }
                    }

                    $consultaPre->close();

                }else{
                echo "<p>No hay datos</p>";
                }
                $this->db->close();
            }
            public function añadirFila($data){
                $this->db = new mysqli($this->servername,$this->username,$this->password,$this->database);

                // comprueba la conexion
                if($this->db->connect_error) {
                    exit ("<h2>ERROR de conexión:".$this->db->connect_error."</h2>");  
                }
                echo"<p>".$_POST['tabla']."</p>";
                if($_POST['tabla']=="Actores"){
                    //prepara la sentencia de inserción
                    $consultaPre = $this->db->prepare("INSERT INTO actores (ID_A, Nombre, Apellidos, Edad, Sexo)  VALUES (?,?,?,?,?)");   
                                
                    //añade los parámetros de la variable Predefinida $_POST
                    // sss indica que se añaden 3 string
                    $consultaPre->bind_param('sssis', 
                            $data[0],$data[1], $data[2], $data[3], $data[4]);
                }else if($_POST['tabla']=="Peliculas"){
                        //prepara la sentencia de inserción
                    $consultaPre = $this->db->prepare("INSERT INTO peliculas (ID_P, Nombre, Año, Valoracion)  VALUES (?,?,?,?)");   
                
                    //añade los parámetros de la variable Predefinida $_POST
                    // sss indica que se añaden 3 string
                    $consultaPre->bind_param('ssii', 
                            $data[0],$data[1], $data[2], $data[3]);
                }else{
                        //prepara la sentencia de inserción
                    $consultaPre = $this->db->prepare("INSERT INTO peliculas_actores (ID_A, ID_P, Personaje)  VALUES (?,?,?)");   
                
                    //añade los parámetros de la variable Predefinida $_POST
                    // sss indica que se añaden 3 string
                    $consultaPre->bind_param('sss', 
                            $data[0],$data[1], $data[2]);
                }
                    

                //ejecuta la sentencia
                $consultaPre->execute();

                //muestra los resultados
                echo "<p class='alert alert-success agileits' role='alert'>Filas agregadas: " . $consultaPre->affected_rows ."</p>";

                $consultaPre->close();

                //cierra la base de datos
                $this->db->close();
            }
           
            public function cargar(){
                $fp = fopen ($_POST["Archivo"],"r");
                while ($data = fgetcsv ($fp, 1000, ";")) {
                    $this->añadirFila($data);
                }
                fclose ($fp);
            }
            public function exportar(){
                $archivo_csv = fopen($_POST["Archivo"], 'w');
                
                $this->db = new mysqli($this->servername,$this->username,$this->password,$this->database);
                $consultaPre = $this->db->query("SELECT DNI,Nombre,Apellidos,Email,Telefono,Edad,Sexo,Nivel,Tiempo,Correctamente,Comentarios,Propuestas,Valoracion FROM pruebasusabilidad");  

                while($row=$consultaPre->fetch_assoc()){

                    if($archivo_csv)
                    {
                        fputcsv($archivo_csv, $row,";","\n");  


                    }
                }
                fclose($archivo_csv);
                $consultaPre->free();
                $this->db->close();  
            }
        }
        $base=new BaseDatos();
        if(isset($_SESSION['base'])){
            $base=$_SESSION['base'];
        }else{
            $_SESSION['base']=$base;
        }
        if (count($_POST)>0) 
        {   
            if(isset($_POST['DA'])) $base->modo=1;
            if(isset($_POST['DP'])) $base->modo=2;
            if(isset($_POST['CD'])) $base->modo=3;
        }
        

        echo "<!-- Datos con el contenidos que aparece en el navegador -->
        <header>
            <h1 class='principal' id='principalH1'>Biblioteca de actores y peliculas</h1>
            <form action='#' method='post' name='botones'>
            <nav class='menu'>
            <ul>
                <li><input name='DA' type='submit' value='Diccionario Actores'/></li>
                <li><input name='DP' type='submit' value='Diccionario Peliculas'/></li>
                <li><input name='CD' type='submit' value='Cargar Datos'/></li>
            </ul>
            </nav>
            </form>
        </header>";
        if($base->modo==0){
            $base->iniciar();
        }else if($base->modo==1){
            echo "
            <section>
                <h2 id='h2Cambniante'>Actores</h2>
                <form action=# method='post' name='insertar'>
                <div id='divisor'>
                    <label for='NAME'>Nombre del actor</label>
                    <input id='NAME' type='text' name='NAME' value=''/>
                    <p></p>
                    
                    <p><input class='dropdown-item' name='DA1' type='submit' value='Buscar actores por el nombre'/></p>
                </div>
                </form>
            </section>";
            if (count($_POST)>0) 
            {   
                if(isset($_POST['DA1'])) $base->searchName();
            }
        }else if($base->modo==2){
            echo "
            <section>
                <h2 id='h2Cambniante'>Peliculas</h2>
                <form action=# method='post' name='insertar'>
                <div id='divisor'>
                    <label for='NAME'>Titulo de la pelicula</label>
                    <input id='NAME' type='text' name='NAME' value=''/>
                    <p></p>
                    
                    <p><input class='dropdown-item' name='DA2' type='submit' value='Buscar peliculas por el titulo'/></p>
                </div>
                </form>
            </section>";
            if (count($_POST)>0) 
            {   
                if(isset($_POST['DA2'])) $base->searchTitle();
            }
        }else if($base->modo==3){
            echo "
                <section>
                    <h2 id='h2Cambniante'>Cargar Archivo</h2>
                    <form action=# method='post' name='insertar'>
                    <div id='divisor'>
                        <label for='tabla'>Selecionar a que tabla cargas los datos (para subir la relacion debes subir primeros los datos de actores y peliculas)</label>
                        <p><select id='tabla' name='tabla'>
                            <option val='1'>Actores</option>
                            <option val='2'>Peliculas</option>
                            <option val='3'>Relacion actores y peliculas</option>
                        </select></p>
                        <label for='subirArchivo'>API File: Selecionar un archivo csv de la máquina cliente</label>
                        <p><input id='subirArchivo' type='file' name='Archivo'></p>
                        <p><input name='C3' type='submit' value='Cargar archivo'/></p>
                    </div>
                    </form>
                </section>";
                if (count($_POST)>0) 
                {   
                    if(isset($_POST['C3'])) $base->cargar();
                }
        }
    ?>
</body>
</html>