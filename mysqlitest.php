<?php
$dbuser = "username";
$dbpass = "password";
$dbhost = "localhost";
$dbname = "database";
$sql = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname) or die(mysqli_error());
$query = "show tables";
$result = mysqli_query($sql,$query) or die(mysqli_error($sql));
print_r($result);
mysqli_close($sql);
?>
