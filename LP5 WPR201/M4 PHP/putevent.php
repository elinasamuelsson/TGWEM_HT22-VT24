<?php
session_start();
include "db_connection.php";

if (isset($_SESSION["id"]) && isset($_SESSION["username"])) {

    $eventid = $_POST['eventid'];
    $eventnamn = $_POST['eventnamn'];
    $eventdatum = $_POST['eventdatum'];
    $eventbesk = $_POST['eventbesk'];

    $sql = "UPDATE handelser SET namn='$eventnamn', datum='$eventdatum', beskrivning='$eventbesk' WHERE id='$eventid'";

    if ($conn->query($sql) === TRUE) {
        echo "Händelse ändrad.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>