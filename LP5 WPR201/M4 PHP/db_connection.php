<?php
$sname = "localhost";
$unmae = "elsa0047";
$password = "";
$db_name = "elsa0047";

$conn = mysqli_connect($sname, $unmae, $password, $db_name);

if (!$conn) {
    echo "Misslyckad koppling";
}
?>