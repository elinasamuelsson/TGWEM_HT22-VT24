<?php
session_start();

if (isset($_SESSION["id"]) && isset($_SESSION["username"])) {
    ?>
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
            <div>
                <p class="text">Välkommen
                    <?php echo $_SESSION["username"]; ?>!
                </p>
            </div>
            <div class="crud-list">
                <div>
                    <form action="addevent.php" method="POST" class="crud-event">
                        <h2>Lägg till evenemang:</h2>
                        <label for="eventnamn">Evenemangets namn:</label>
                        <input type="text" name="eventnamn">
                        <label for="eventnamn">Evenemangets datum:</label>
                        <input type="date" name="eventdatum">
                        <label for="eventnamn">Beskrivning:</label>
                        <input type="text" name="eventbesk"> <br>
                        <button type="submit" class="button-crud">Lägg till</button>
                    </form>
                </div>
                <div>
                    <form action="putevent.php" method="POST" class="crud-event">
                        <h2>Ändra evenemang:</h2>
                        <label for="eventid">Evenemangets id:</label>
                        <input type="text" name="eventid">
                        <label for="eventnamn">Evenemangets namn:</label>
                        <input type="text" name="eventnamn">
                        <label for="eventnamn">Evenemangets datum:</label>
                        <input type="date" name="eventdatum">
                        <label for="eventnamn">Beskrivning:</label>
                        <input type="text" name="eventbesk"> <br>
                        <button type="submit" class="button-crud">Ändra</button>
                    </form>
                </div>
                <div>
                    <form action="delevent.php" method="POST" class="crud-event">
                        <h2>Radera evenemang:</h2>
                        <label for="eventid">Evenemangets id:</label>
                        <input type="text" name="eventid"><br>
                        <button type="submit" class="button-crud">Radera</button>
                    </form>
                </div>
            </div>
            <div><a href="logout.php" class="text">Logga ut</a></div>
            <?php include 'footer.php'; ?>
        </main>
    </body>

    </html>
    <?php
} else {
    header("Location: index.php");
    exit();
}
?>