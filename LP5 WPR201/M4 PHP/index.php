<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <!-- Add links to your CSS and JavaScript files here if needed -->
</head>

<body>
    <main class="container">
        <?php include 'header.php'; ?>
        <div class="text">
            <p>Lessebo stad finns mitt i Glasriket och har strax över 2700 invånare. I Lessebo finns livsglädje och en
                vi-känsla som gör det lätt att lära känna varandra. Vi arrangerar evenemang för alla våra invånare -
                oavsett ålder, läggning, och kultur.</p>
        </div>
        <div class="upcoming-border">
            <div class="upcoming">
                <h2>Kommande evenemang:</h2>
                <?php
                include 'db_connection.php';

                $idag = date("Y-m-d");
                $sql = "SELECT * FROM handelser WHERE datum >= '$idag' ORDER BY datum ASC";
                $result = $conn->query($sql);

                if (isset($_SESSION["username"])) {
                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) { ?>
                            <div>
                                <?php
                                echo "<h3>" . $row["namn"] . "</h3>";
                                echo "<em> id:" . $row["id"] . "</em><br>";
                                echo "<em>" . $row["datum"] . "</em><br>";
                                echo $row["beskrivning"] . "<br>";
                                ?>
                            </div>
                            <?php
                        }
                    } else {
                        echo "Inga händelser funna.";
                    }
                } else {
                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) { ?>
                            <div>
                                <?php
                                echo "<h3>" . $row["namn"] . "</h3>";
                                echo "<em>" . $row["datum"] . "</em><br>";
                                echo $row["beskrivning"] . "<br>";
                                ?>
                            </div>
                            <?php
                        }
                    } else {
                        echo "Inga händelser funna.";
                    }
                }

                $conn->close();
                ?>
            </div>
        </div>
        <?php include 'footer.php'; ?>
    </main>
</body>

</html>