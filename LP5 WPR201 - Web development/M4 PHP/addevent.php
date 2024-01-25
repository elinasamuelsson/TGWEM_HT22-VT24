<?php
session_start();
include "db_connection.php";

if (isset($_SESSION["id"]) && isset($_SESSION["username"])) {

    $eventnamn = $_POST['eventnamn'];
    $eventdatum = $_POST['eventdatum'];
    $eventbesk = $_POST['eventbesk'];

    $sql = "INSERT INTO handelser (namn, datum, beskrivning) VALUES ('$eventnamn', '$eventdatum', '$eventbesk')";

    if ($conn->query($sql) === TRUE) {
        echo "Händelse tillagd.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>