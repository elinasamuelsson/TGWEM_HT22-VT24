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
        <div class="about-page">
            <div class="text">
                <h2>Om oss</h2>
                <p>
                    Vi är en samling passionerade invånare som älskar vårt vackra Lessebo och är fast beslutna att skapa
                    en
                    ännu bättre framtid för vårt samhälle. På den här webbplatsen kan du utforska alla kulturella
                    evenemang
                    som hålls i vår stad.
                </p>
                <p>
                    Vår målsättning är att främja en känsla av samhörighet och engagemang bland stadens invånare. Vi
                    tror på
                    att samarbeta för att skapa en bättre stad för oss alla. Genom att dela information, evenemang och
                    initiativ hoppas vi inspirera till samarbete och skapa en plattform där varje medborgare kan göra
                    sin
                    röst hörd. Tillsammans kan vi forma framtiden för Lessebo och göra den till en ännu bättre plats att
                    bo,
                    arbeta och leva i. Välkommen att vara en del av vår gemenskap!
                </p>
            </div>
            <div>
                <h2>Styrelsemedlemmar</h2>
                <table>
                    <tr>
                        <th>Namn</th>
                        <th>Position</th>
                    </tr>
                    <tr>
                        <td>Eva Andersson</td>
                        <td>Ordförande</td>
                    </tr>
                    <tr>
                        <td>Henrik Johansson</td>
                        <td>Vice ordförande</td>
                    </tr>
                    <tr>
                        <td>Maria Lindström</td>
                        <td>Sekreterare</td>
                    </tr>
                    <tr>
                        <td>Anders Pettersson</td>
                        <td>Kassör</td>
                    </tr>
                    <tr>
                        <td>Karin Nilsson</td>
                        <td>Styrelseledamot</td>
                    </tr>
                    <tr>
                        <td>Lars Svensson</td>
                        <td>Styrelseledamot</td>
                    </tr>
                    <tr>
                        <td>Anna Berg</td>
                        <td>Styrelseledamot</td>
                    </tr>
                    <tr>
                        <td>Erik Karlsson</td>
                        <td>Styrelseledamot</td>
                    </tr>
                    <tr>
                        <td>Sofia Malm</td>
                        <td>Revisor</td>
                    </tr>
                    <tr>
                        <td>Johan Eriksson</td>
                        <td>Revisorssuppleant</td>
                    </tr>
                </table>
            </div>
        </div>
        <?php include 'footer.php'; ?>
    </main>
</body>

</html>