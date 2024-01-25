<?php
session_start();
include "db_connection.php";

if (isset($_SESSION["id"]) && isset($_SESSION["username"])) {

    $eventid = $_POST["eventid"];

    $sql = "DELETE FROM handelser WHERE id='$eventid'";

    if ($conn->query($sql) === TRUE) {
        echo "Händelse tillagd.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>