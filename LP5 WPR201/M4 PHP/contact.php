<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
</head>

<body>
    <main class="container">
        <?php include 'header.php'; ?>
        <div class="contact-form">
            <form action="contact-form.php" method="POST">
                <h2>Kontakta oss</h2>
                <label for="connamn">Ditt namn:</label><br>
                <input type="text" name="connamn"><br><br>

                <label for="conepost">Din epost:</label><br>
                <input type="text" name="conepost"><br><br>

                <label for="contele">Ditt telefonnummer:</label><br>
                <input type="text" name="contele"><br><br>

                <label for="conmeddelande">Meddelande:</label><br>
                <textarea name="conmeddelande" rows="4"></textarea><br><br>

                <input type="submit" value="Submit">
            </form>
        </div>
        <?php include 'footer.php'; ?>
    </main>
</body>

</html>