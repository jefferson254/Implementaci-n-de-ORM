<?php
include '.\conexion.php';
$id=$_POST['id'];
$nombre=$_POST['nombre'];

$sql="INSERT INTO cliente(id,nombre) 
VALUES('$id','$nombre')";
// Check connection
if (!$conn) {
echo("Connection failed: " . mysqli_connect_error());
    }else{
        if (mysql_query($conn, $sql)) {
} else {
    
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
}
mysqli_close($conn);
?>
