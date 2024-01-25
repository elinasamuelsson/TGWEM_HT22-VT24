<?php
session_start();
include "db_connection.php";

if (isset($_POST['username']) && isset($_POST['password'])) {
    function validate($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    $username = validate($_POST['username']);
    $password = validate($_POST['password']);

    if (empty($username) || empty($password)) {
        header("Location: index.php?error=Båda fält måste vara ifyllda.");
        exit();
    } else {
        $sql = "SELECT * FROM userdata WHERE uname='$username' AND pword='$password'";

        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) === 1) {
            $row = mysqli_fetch_assoc($result);
            if ($row["uname"] === $username && $row["pword"] === $password) {
                $_SESSION['username'] = $row['uname'];
                $_SESSION['password'] = $row['pword'];
                $_SESSION['id'] = $row['id'];
                header("Location: admin.php");
            }
        } else {
            header("Location: index.php?error=Felaktiga inloggningsuppgifter.");
        }
    }
} else {
    header("Location: index.php");
    exit();
}