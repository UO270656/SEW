<!DOCTYPE HTML>

<html lang="es">
<head>
    <!-- Datos que describen el documento -->
    <meta charset="UTF-8">
    <title>Ejercicio 6</title>
    <META name="Ejercicio 6" CONTENT="Ejercicio 6 con todas las tareas hechas">
    <link rel="stylesheet" type="text/css" href="Ejercicio6.css">
</head>

<body>
    <?php
        session_name('p622');
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
                $this->database = "ejercicio6";
                $this->informe=array();
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
                    $crearTabla = "CREATE TABLE IF NOT EXISTS pruebasusabilidad (DNI VARCHAR(9) NOT NULL 
                    , Nombre VARCHAR(20) NOT NULL 
                    , Apellidos VARCHAR(40) NOT NULL 
                    , Email VARCHAR(40) NOT NULL 
                    , Telefono VARCHAR(20) NOT NULL 
                    , Edad INT NOT NULL 
                    , Sexo ENUM('Masculino','Femenino','Otro') NOT NULL 
                    , Nivel INT NOT NULL 
                    , Tiempo INT NOT NULL 
                    , Correctamente INT NOT NULL, CHECK (Correctamente=1 OR Correctamente=0)
                    , Comentarios VARCHAR(180) NOT NULL 
                    , Propuestas VARCHAR(180) NOT NULL 
                    , Valoracion INT NOT NULL 
                    , PRIMARY KEY (DNI))";
                            
                    if($this->db->query($crearTabla) === TRUE){
                        echo "<p>Tabla 'pruebasusabilidad' creada con éxito </p>";
                    } else { 
                        echo "<p>ERROR en la creación de la tabla pruebasusabilidad. Error : ". $this->db->error . "</p>";
                        exit();
                    }   
                    $this->db->close();   
                }else{
                    echo "<p>ERROR la BD no ha sido creada</p>";
                }
            }
            public function insert(){
                $this->db = new mysqli($this->servername,$this->username,$this->password,$this->database);

                // comprueba la conexion
                if($this->db->connect_error) {
                    exit ("<h2>ERROR de conexión:".$this->db->connect_error."</h2>");  
                }
    
                //prepara la sentencia de inserción
                $consultaPre = $this->db->prepare("INSERT INTO pruebasusabilidad (DNI, Nombre, Apellidos, Email, Telefono, Edad, Sexo, Nivel, Tiempo, Correctamente, Comentarios, Propuestas, Valoracion)  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");   
            
                //añade los parámetros de la variable Predefinida $_POST
                // sss indica que se añaden 3 string
                $consultaPre->bind_param('sssssisiiissi', 
                        $_POST["DNI"],$_POST["Nombre"], $_POST["Apellidos"], $_POST["Email"], $_POST["Telefono"]
                        , $_POST["Edad"], $_POST["Sexo"], $_POST["Nivel"], $_POST["Tiempo"], $_POST["Correctamente"]
                        , $_POST["Comentarios"], $_POST["Propuestas"], $_POST["Valoracion"]);    

                //ejecuta la sentencia
                $consultaPre->execute();

                //muestra los resultados
                echo "<p class='alert alert-success agileits' role='alert'>Filas agregadas: " . $consultaPre->affected_rows ."</p>";

                $consultaPre->close();

                //cierra la base de datos
                $this->db->close();         
            }
            public function search(){
                $this->db = new mysqli($this->servername,$this->username,$this->password,$this->database);

                // comprueba la conexion
                if($this->db->connect_error) {
                    exit ("<h2>ERROR de conexión:".$this->db->connect_error."</h2>");  
                } else {}
    
                //prepara la sentencia de inserción
                $consultaPre = $this->db->query("SELECT * FROM pruebasusabilidad WHERE DNI = ".$_POST["DNI"]);  

                $row=$consultaPre->fetch_assoc();
                echo "<p>Nombre: " . $row['Nombre']. ", Apellidos: ". $row['Apellidos'].", Email: ". $row['Email']."</p>";

                $consultaPre->close();

                //cierra la base de datos
                $this->db->close();  
            }
            public function update(){
                $this->db = new mysqli($this->servername,$this->username,$this->password,$this->database);

                // comprueba la conexion
                if($this->db->connect_error) {
                    exit ("<h2>ERROR de conexión:".$this->db->connect_error."</h2>");  
                } else {}
    
                //prepara la sentencia de inserción
                $consultaPre = $this->db->prepare("UPDATE pruebasusabilidad SET Nombre = ?,Apellidos= ?, Email= ?, Telefono= ?, Edad= ?, Sexo= ?, Nivel= ?, Tiempo= ?, Correctamente= ?, Comentarios= ?, Propuestas= ?, Valoracion= ? WHERE DNI=?");  

                $consultaPre->bind_param('ssssisiiissis', 
                        $_POST["Nombre"], $_POST["Apellidos"], $_POST["Email"], $_POST["Telefono"]
                        , $_POST["Edad"], $_POST["Sexo"], $_POST["Nivel"], $_POST["Tiempo"], $_POST["Correctamente"]
                        , $_POST["Comentarios"], $_POST["Propuestas"], $_POST["Valoracion"],$_POST["DNI"]);    

                //ejecuta la sentencia
                $consultaPre->execute();

                //muestra los resultados
                echo "<p>Filas modificadas: " . $consultaPre->affected_rows . "</p>";

                $consultaPre->close();

                //cierra la base de datos
                $this->db->close();
            }
            public function delete(){
                $this->db = new mysqli($this->servername,$this->username,$this->password,$this->database);

                // comprueba la conexion
                if($this->db->connect_error) {
                    exit ("<h2>ERROR de conexión:".$this->db->connect_error."</h2>");  
                } else {}
    
                //prepara la sentencia de inserción
                if($this->db->query("DELETE FROM pruebasusabilidad WHERE DNI = ".$_POST["DNI"])==TRUE)  {
                    echo "<p>Fila eliminada correctamente</p>";
                }else{
                    echo "<p>Fila no eliminada</p>";
                }

                //cierra la base de datos
                $this->db->close();  
            } 
            public function añadirFila($data){
                $this->db = new mysqli($this->servername,$this->username,$this->password,$this->database);

                // comprueba la conexion
                if($this->db->connect_error) {
                    exit ("<h2>ERROR de conexión:".$this->db->connect_error."</h2>");  
                }
    
                //prepara la sentencia de inserción
                $consultaPre = $this->db->prepare("INSERT INTO pruebasusabilidad (DNI, Nombre, Apellidos, Email, Telefono, Edad, Sexo, Nivel, Tiempo, Correctamente, Comentarios, Propuestas, Valoracion)  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");   
            
                //añade los parámetros de la variable Predefinida $_POST
                // sss indica que se añaden 3 string
                $consultaPre->bind_param('sssssisiiissi', 
                        $data[0],$data[1], $data[2], $data[3], $data[4]
                        , $data[5], $data[6], $data[7], $data[8], $data[9]
                        , $data[10], $data[11], $data[12]);    

                //ejecuta la sentencia
                $consultaPre->execute();

                //muestra los resultados
                echo "<p class='alert alert-success agileits' role='alert'>Filas agregadas: " . $consultaPre->affected_rows ."</p>";

                $consultaPre->close();

                //cierra la base de datos
                $this->db->close();
            }
            public function generateInforme(){
                $this->db = new mysqli($this->servername,$this->username,$this->password,$this->database);

                // comprueba la conexion
                if($this->db->connect_error) {
                    exit ("<h2>ERROR de conexión:".$this->db->connect_error."</h2>");  
                }

                $consultaPre = $this->db->query("SELECT AVG(Valoracion) AS val FROM pruebasusabilidad");  

                while($row=$consultaPre->fetch_assoc()){
                    array_unshift($this->informe, $row['val']);
                }

                $consultaPre->close();

                $consultaPre = $this->db->query("SELECT COUNT(*) AS files FROM pruebasusabilidad");  

                while($row=$consultaPre->fetch_assoc()){
                    $nf= $row['files'];
                }

                $consultaPre->close();

                $consultaPre = $this->db->query("SELECT COUNT(*) AS correctamente FROM pruebasusabilidad WHERE Correctamente='1'");  

                while($row=$consultaPre->fetch_assoc()){
                    $correctamente=$row['correctamente'];
                    array_unshift($this->informe, (($correctamente/$nf)*100)."%");
                }

                $consultaPre->close();

                $consultaPre = $this->db->query("SELECT AVG(Tiempo) AS mediaTarea FROM pruebasusabilidad");  

                while($row=$consultaPre->fetch_assoc()){
                    array_unshift($this->informe, $row['mediaTarea']);
                }

                $consultaPre->close();

                $consultaPre = $this->db->query("SELECT COUNT(*) AS sexoO FROM pruebasusabilidad WHERE Sexo='Otro'");  

                while($row=$consultaPre->fetch_assoc()){
                    $sO=$row['sexoO'];
                    array_unshift($this->informe, (($sO/$nf)*100)."%");
                }

                $consultaPre->close();

                $consultaPre = $this->db->query("SELECT COUNT(*) AS sexoF FROM pruebasusabilidad WHERE Sexo='Femenino'");  

                while($row=$consultaPre->fetch_assoc()){
                    $sF=$row['sexoF'];
                    array_unshift($this->informe, (($sF/$nf)*100)."%");
                }

                $consultaPre->close();

                $consultaPre = $this->db->query("SELECT COUNT(*) AS sexoM FROM pruebasusabilidad WHERE Sexo='Masculino'");  

                while($row=$consultaPre->fetch_assoc()){
                    $sM=$row['sexoM'];
                    array_unshift($this->informe, (($sM/$nf)*100)."%");
                }

                $consultaPre->close();
    
                //prepara la sentencia de inserción
                $consultaPre = $this->db->query("SELECT AVG(Edad) AS media FROM pruebasusabilidad");  

                while($row=$consultaPre->fetch_assoc()){
                    array_unshift($this->informe, $row['media']);
                }

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
            if(isset($_POST['BD'])) $base->modo=1;
            if(isset($_POST['TABLA'])) $base->modo=2;
            if(isset($_POST['T1'])) $base->modo=3;
            if(isset($_POST['T2'])) $base->modo=4;
            if(isset($_POST['T3'])) $base->modo=5;
            if(isset($_POST['T4'])) $base->modo=6;
            if(isset($_POST['B1'])) $base->modo=7;
            if(isset($_POST['B2'])) $base->modo=8;
            if(isset($_POST['IN'])) $base->modo=9;
        }
        

        echo "<!-- Datos con el contenidos que aparece en el navegador -->
        <header>
            <h1 class='principal' id='principalH1'>SEW EJERCICIO 6</h1>
            <form action='#' method='post' name='botones'>
            <nav class='menu'>
            <ul>
                <li><input name='BD' type='submit' value='Crear BD'/></li>
                <li><input name='TABLA' type='submit' value='Crear Tabla'/></li>
                <li class='dropdown'>
                    <a class='dropbtn'>Datos TABLA</a>
                    <div class='dropdown-content'>
                        <input class='dropdown-item' name='T1' type='submit' value='Insertar'/>
                        <input class='dropdown-item' name='T2' type='submit' value='Buscar'/>
                        <input class='dropdown-item' name='T3' type='submit' value='Modificar'/>
                        <input class='dropdown-item' name='T4' type='submit' value='Eliminar'/>
                    </div>
                </li>
                <li class='dropdown'>
                    <a class='dropbtn'>Datos BD</a>
                    <div class='dropdown-content'>
                        <input class='dropdown-item' name='B1' type='submit' value='Cargar Datos'/>
                        <input class='dropdown-item' name='B2' type='submit' value='Exportar Datos'/>
                    </div>
                </li>
                <li><input name='IN' type='submit' value='Generar Informe'/></li>
            </ul>
            </nav>
            </form>
        </header>";

        if($base->modo==3){
            echo "
            <section>
                <h2 id='h2Cambniante'>Insertar Datos</h2>
                <form action=# method='post' name='insertar'>
                <div id='divisor'>
                    <label for='DNI'>DNI</label>
                    <input id='DNI' type='text' name='DNI' value=''/>
                    <p></p>
                    <label for='Nombre'>Nombre</label>
                    <input id='Nombre' type='text' name='Nombre' value=''/>
                    <p></p>
                    <label for='Apellidos'>Apellidos</label>
                    <input id='Apellidos' type='text' name='Apellidos' value=''/>
                    <p></p>
                    <label for='Email'>E-mail</label>
                    <input id='Email' type='text' name='Email' value=''/>
                    <p></p>
                    <label for='Telefono'>Telefono</label>
                    <input id='Telefono' type='text' name='Telefono' value=''/>
                    <p></p>
                    <label for='Edad'>Edad</label>
                    <input id='Edad' type='text' name='Edad' value=''/>
                    <p></p>
                    <label for='Sexo'>Sexo</label>
                    <input id='Sexo' type='text' name='Sexo' value=''/>
                    <p></p>
                    <label for='Nivel'>Nivel de conocimiento</label>
                    <input id='Nivel' type='text' name='Nivel' value=''/>
                    <p></p>
                    <label for='Tiempo'>Tiempo empleado</label>
                    <input id='Tiempo' type='text' name='Tiempo' value=''/>
                    <p></p>
                    <label for='Correctamente'>Correctamente hecha la prueba (true='1'/false='0')</label>
                    <input id='Correctamente' type='text' name='Correctamente' value=''/>
                    <p></p>
                    <label for='Comentarios'>Comentarios</label>
                    <input id='Comentarios' type='text' name='Comentarios' value=''/>
                    <p></p>
                    <label for='Propuestas'>Propuestas de mejora</label>
                    <input id='Propuestas' type='text' name='Propuestas' value=''/>
                    <p></p>
                    <label for='Valoracion'>Valoracion</label>
                    <input id='Valoracion' type='text' name='Valoracion' value=''/>
                    <p></p>
                    
                    <p><input class='dropdown-item' name='BD0' type='submit' value='Insertar en la tabla'/></p>
                </div>
                </form>
            </section>";
            if (count($_POST)>0) 
            {   
                if(isset($_POST['BD0'])) $base->insert();
            }
        }else if($base->modo==4){
            echo "
            <section>
                <h2 id='h2Cambniante'>Busqueda de Datos</h2>
                <form action=# method='post' name='insertar'>
                <div id='divisor'>
                    <label for='DNI'>DNI de la fila que desea buscar</label>
                    <input id='DNI' type='text' name='DNI' value=''/>
                    <p></p>
                    
                    <p><input class='dropdown-item' name='BD1' type='submit' value='Buscar en la tabla'/></p>
                </div>
                </form>
            </section>";
            if (count($_POST)>0) 
            {   
                if(isset($_POST['BD1'])) $base->search();
            }
        }else if($base->modo==5){
            echo "
            <section>
                <h2 id='h2Cambniante'>Modificar Datos</h2>
                <form action=# method='post' name='insertar'>
                <div id='divisor'>
                    <label for='DNI'>DNI de la fila que desea modificar</label>
                    <input id='DNI' type='text' name='DNI' value=''/>
                    <p></p>
                    <label for='Nombre'>Nuevo Nombre</label>
                    <input id='Nombre' type='text' name='Nombre' value=''/>
                    <p></p>
                    <label for='Apellidos'>Nuevo Apellidos</label>
                    <input id='Apellidos' type='text' name='Apellidos' value=''/>
                    <p></p>
                    <label for='Email'>Nuevo E-mail</label>
                    <input id='Email' type='text' name='Email' value=''/>
                    <p></p>
                    <label for='Telefono'>Nuevo Telefono</label>
                    <input id='Telefono' type='text' name='Telefono' value=''/>
                    <p></p>
                    <label for='Edad'>Nuevo Edad</label>
                    <input id='Edad' type='text' name='Edad' value=''/>
                    <p></p>
                    <label for='Sexo'>Nuevo Sexo</label>
                    <input id='Sexo' type='text' name='Sexo' value=''/>
                    <p></p>
                    <label for='Nivel'>Nuevo Nivel de conocimiento</label>
                    <input id='Nivel' type='text' name='Nivel' value=''/>
                    <p></p>
                    <label for='Tiempo'>Nuevo Tiempo empleado</label>
                    <input id='Tiempo' type='text' name='Tiempo' value=''/>
                    <p></p>
                    <label for='Correctamente'>Correctamente hecha la prueba (true/false)</label>
                    <input id='Correctamente' type='text' name='Correctamente' value=''/>
                    <p></p>
                    <label for='Comentarios'>Nuevo Comentarios</label>
                    <input id='Comentarios' type='text' name='Comentarios' value=''/>
                    <p></p>
                    <label for='Propuestas'>Nuevo Propuestas de mejora</label>
                    <input id='Propuestas' type='text' name='Propuestas' value=''/>
                    <p></p>
                    <label for='Valoracion'>Valoracion</label>
                    <input id='Valoracion' type='text' name='Valoracion' value=''/>
                    <p></p>
                    
                    <p><input class='dropdown-item' name='BD2' type='submit' value='Modificar fila'/></p>
                </div>
                </form>
            </section>";
            if (count($_POST)>0) 
            {   
                if(isset($_POST['BD2'])) $base->update();
            }
        }else if($base->modo==6){
            echo "
            <section>
                <h2 id='h2Cambniante'>Eliminar Datos</h2>
                <form action=# method='post' name='insertar'>
                <div id='divisor'>
                    <label for='DNI'>DNI de la fila que desea eliminar</label>
                    <input id='DNI' type='text' name='DNI' value=''/>
                    <p></p>
                    
                    <p><input class='dropdown-item' name='BD3' type='submit' value='Eliminar fila'/></p>
                </div>
                </form>
            </section>";
            if (count($_POST)>0) 
            {   
                if(isset($_POST['BD3'])) $base->delete();
            }
        }else if($base->modo==1){
            if($base->create==false){
                echo "
                <section>
                    <h2 id='h2Cambniante'>BD</h2>
                    <div id='divisor'>";
                $base->createBD();
                
                echo"</div>
                </section>";
            }else{
                echo "
                <section>
                    <h2 id='h2Cambniante'>BD</h2>
                    <div id='divisor'>
                        <p>Base de datos ya había sido creada con exito</p>
                    </div>
                </section>";
            }
        }else if($base->modo==2){
            echo "
                <section>
                    <h2 id='h2Cambniante'>Tabla</h2>
                    <div id='divisor'>";
                $base->createTable();
                
                echo"</div>
                </section>";
        }else if($base->modo==7){
            echo "
                <section>
                    <h2 id='h2Cambniante'>Cargar Archivo</h2>
                    <form action=# method='post' name='insertar'>
                    <div id='divisor'>
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
        }else if($base->modo==8){
            echo "
                <section>
                    <h2 id='h2Cambniante'>Exportar BD</h2>
                    <form action=# method='post' name='insertar'>
                    <div id='divisor'>
                        <label for='subirArchivo'>API File: Selecionar un archivo csv de la máquina cliente</label>
                        <p><input id='subirArchivo' type='file' name='Archivo'></p>
                        <p><input name='C4' type='submit' value='Exportar a archivo'/></p>
                    </div>
                    </form>
                </section>";
                if (count($_POST)>0) 
                {   
                    if(isset($_POST['C4'])) $base->exportar();
                }
        }else if($base->modo==9){
            $base->generateInforme();
            echo "
            <section>
                <h2 id='h2Cambniante'>Informe</h2>
                <div id='divisor'>
                    <table>
                        <tr>
                            <th>Edad Media</th>
                            <td>".array_shift($base->informe)."</td>
                        </tr>
                        <tr>
                            <th>Frecuencia de Hombres</th>
                            <td>".array_shift($base->informe)."</td>
                        </tr>
                        <tr>
                            <th>Frecuencia de Mujeres</th>
                            <td>".array_shift($base->informe)."</td>
                        </tr>
                        <tr>
                            <th>Frecuencia de Otro</th>
                            <td>".array_shift($base->informe)."</td>
                        </tr>
                        <tr>
                            <th>Tiempo medio para la tarea</th>
                            <td>".array_shift($base->informe)."</td>
                        </tr>
                        <tr>
                            <th>% Usuarios que la realizaron correctamente</th>
                            <td>".array_shift($base->informe)."</td>
                        </tr>
                        <tr>
                            <th>Valor medio de la puntacion</th>
                            <td>".array_shift($base->informe)."</td>
                        </tr>
                    </table>
                </div>
            </section>";
        }
    ?>
</body>
</html>