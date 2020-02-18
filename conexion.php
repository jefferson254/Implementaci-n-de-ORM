<html>
<head>
<title> Conectarse a Base de datos</title>
</head>
<body>
<?php
function conectarse()
{
	if (!($link=mysqli_connect('localhost','root')))
	{
		echo "Error conectando a la base de datos.";
		exit();
	}
	if (!mysqli_select_db($link,'mapa'))
	{
		echo "Error seleccionando la base de datos.";
		exit();
	}
	return $link;
}
conectarse();
echo "Conexión con la Base de Datos Exitosa<br>";
?>
</body>
</html>