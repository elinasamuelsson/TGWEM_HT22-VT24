var jul = ["Hajar som hajar", "Snö", "Julklapp", "Gran"];
// definierar en array av fyra stringar
jul[4] = "Snöängel";
// lägger till stringen "Snöängel" på plats 4 (om man räknar från 0, eftersom javascript är 0-indexerat).
jul.push("Glögg");
// lägger till "Glögg" längst bak i arrayen
jul.push("Pepparkakshus");
// lägger till "Pepparkakshus" längst bak i arrayen
jul.shift();
// tar bort första saken/posten i arrayen

alert(jul[0]);
// alertar den string som har plats 0 i arrayen

for (var i = 0; i < jul.length; i++) {
  alert(jul[i]); 
} // loopar igenom arrayen tills den tar slut och alertar varje post

var slumptal = Math.floor(Math.random() * jul.length);
// definierar en variabel och tilldelar den ett slumpat nummer mellan 0 och 5.
alert("Slumpade nyckelen till julfriden:" + jul[slumptal]);
/* alertar ovan string och konkatenerar ihop med ett slumpat ord ur arrayen (som vi plockar fram med hjälp
av variabeln slumptal) */

/* alertar först Snö, sedan loopar och alertar hela arrayen post för post (Snö, Julklapp, Gran, Snöängel,
Glögg, Pepparkakshus). Till sist använders ett slumpat tal för att ta en slumpad post i arrayen och alerta
"Slumpade nyckelen till julfriden: ______" där blank är den slumpade posten */