<?php
session_start();
include "db_connection.php";

function validate($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$connamn = validate($_POST['connamn']);
$conepost = validate($_POST['conepost']);
$contele = validate($_POST['contele']);
$conmeddelande = validate($_POST['conmeddelande']);

$sql = "INSERT INTO kontaktforfragningar (namn, epost, telefonnummer, meddelande) VALUES ('$connamn', '$conepost', '$contele', '$conmeddelande')";

if ($conn->query($sql) === TRUE) {
    echo "Ditt meddelande har mottagits.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>