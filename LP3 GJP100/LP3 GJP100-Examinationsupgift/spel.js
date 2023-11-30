/* använt https://www.youtube.com/watch?v=R1S_NhKkvGA som referens/riktlinje, främst med strukturen kring upplägget på arrayen aventyret, men också för hjälp och förståelse av parametrar i min funktion

använt https://blog.logrocket.com/localstorage-javascript-complete-guide/ som referens för funktionalitet kring local storage */

const para = document.getElementById("textPara"),
/* definiera målet för vår text */
knapparDiv = document.getElementById("knappContainer");
/* definiera målet för våra knappar */

    // HÄMTA RELEVANT STORYDEL + SVARSKNAPPAR
function korSpel(textId) {
  /* funktionen korSpel hämtar med hjälp av parametern text och knappval från json-filen aventyret.json, och skickar dem till DOM:en. funktionen körs om varje gång ett knappval görs */
  fetch("./cyoa.json")
    .then((response) => response.json())
    .then((aventyret) => {
      /* hämtar data från json-filen och lägger den i variabeln aventyret */

      let storyDel;
      /* definierar varabeln storyDel */
      for (let count = 0; count < aventyret.length; ++count) {
        /* loopar igenom arrayen för att hitta den storydel som matchar parametern och tilldelar den till variabeln storyDel */
        if (aventyret[count].id == textId) {
          storyDel = aventyret[count];
          break;
        } /* om (när) storyobjektets id matchar parametern tilldelas objektet till variabeln storyDel. Break för att stoppa mitt if-statement när rätt del hittats */ 
        else {
          para.innerText = "Något gick fel, ladda om och försök igen.";
        } /* else ifall något går fel */
      }
      para.innerText = storyDel.text;
      /* ställer in texten i HTML-paragrafen till den storydel som tilldelats storyDel och hämtar enbart texten med hjälp av .text eftersom detta är vad text-stringen är döpt till i objektet */

      knapparDiv.innerHTML = "";
      /* tömmer knapparnas div innan nedan for-loop fyller på med nya knappar */
      for (let count = 0; count < storyDel.val.length; ++count) {
        /* använder varabeln storyDel och dess array val för att bestämma hur länge loopen ska köras */
        const val = storyDel.val[count];
        /* definierar varabeln val och tilldelar antingen första eller andra objektet ur berörd storydels val-array beroende på vart i loopen vi befinner oss */
        const knapp = document.createElement("button");
        /* skapar variabeln knapp och använder den till att skapa en knapp till HTML-koden */
        knapp.innerText = val.text;
        /* ställer in texten på knappen till det val som tilldelats variabeln val och hämtar enbart texten med hjälp av .text eftersom detta är vad text-stringen är döpt till i objektet */
        knapp.addEventListener("click", () => korSpel(val.nasta));
        /* sätter en eventlistener på knappen och säger att om knappen klickas på ska vi köra samma funktion igen (korSpel-funktionen) med parametern val.nasta. Detta innebär att funktionen kommer att ta stringen nasta från det val som loopen jobbar på nu och använda den som referenspunkt nästa gång funktionen körs för att välja vilken del som ska tilldelas till variabeln storyDel */
        knapparDiv.appendChild(knapp);
        /* fäster knappen vid variabeln knapparDiv och därmed knapparnas div i HTML-koden */
      }
      window.localStorage.setItem("sparat spel", storyDel.id);
      /* sparar aktuell position till local storage så att man kan fortsätta spela där man avbröt om man lämnar sidan */
    });
}

    // OMSTARTSKNAPP
const startaOmKnapp = document.getElementById("knappOmstart");
/* definierar variabeln startaOmKnapp och hämtar knappen med idt omstartKnapp från HTML-koden */
startaOmKnapp.addEventListener("click", () => korSpel("start"));
/* lägger en eventlistener på min omstartsknapp som lyssnar efter ett klick och kör funktionen korSpel med parametern "start", som är idt/namnet på den första storysektionen */

    // LOCAL STORAGE + KÖR SPEL
let sparatSpel = window.localStorage.getItem("sparat spel");
if (!sparatSpel) {
  korSpel("start");
} 
else {
  korSpel(sparatSpel);
}