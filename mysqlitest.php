<?php
echo "Testing";
require_once('wp-config.php');


$dbuser = DB_USER;
$dbpass = DB_PASSWORD;
$dbhost = DB_HOST;
$dbname = DB_NAME;
$sql = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname) or die(mysqli_error());
$query = "show tables";
$result = mysqli_query($sql,$query) or die(mysqli_error($sql));
print_r($result);
mysqli_close($sql);
?>
