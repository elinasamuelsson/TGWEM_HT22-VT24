let names = []; //tom array där namnen i listan kommer att ligga

makeList(); //kör funktionen makeList()
function makeList() {
  if (localStorage.getItem("names")) {
    //om det finns en pågående lista sedan tidigare sparad i datorns lokala minne
    names = JSON.parse(localStorage.getItem("names")); //hämta listan från minnet och lägg den i arrayen
  } else {
    //annars (om det är första gången sidan körs, eller lagrad data raderats)
    names = ["Elina", "Sara", "Tobias"]; //använd placeholdernamnen
  }
  let output = ""; //skapa tom string
  const list = document.getElementById("list"); //skapa variabeln list och hämta elementet med id:t list från html-koden (en ul-tagg)
  for (let i = 0; i < names.length; i++) {
    //loopa igenom arrayen och placera in varje separat item i texten nedan och lägg den i output-variabeln
    output += `<li>${names[i]}<span><i class="fa-regular fa-pen-to-square" title="Redigera namn" onclick='edit(${i})'></i> <i class="fa-solid fa-eraser" title="Radera namn" onclick='remove(${i})'></i></span></li>`;
  }
  list.innerHTML = output; //lägg till allt i variabeln output i ul-listan som html-kod
}

function add() {
  const newName = document.getElementById("nameInput").value.trim(); //hämta värdet i inputfältet med id nameInput och trimma bort blanksteg innan och efter text och lägger det i en variabel
  if (newName.length !== 0) {
    //så länge fältet inte är tomt
    names.push(newName); //lägg till värdet längst bak i arrayen
    saveToStorage(); //spara den uppdaterade arrayen till datorns lokala minne
    document.getElementById("nameInput").value = ""; //töm inputfältet till sample-text
    makeList(); //kör funktionen makeList() för att uppdatera listan på html-sidan
  } else {
    //om inputfältet är tomt alertas användaren att det inte får vara tomt
    alert("Fältet får inte vara tomt.");
  }
}

function edit(id) {
  //funktionen edit med parameter id (parameter tas från texten i output-variabeln där vi specifierar vilket id-nummer varje array item har)
  const newName = prompt("Enter the new name:").trim(); //när man trycker på ikonen för redigering får man ett prompt för att ändra namnet (blanksteg före och efter input trimmas)
  if (newName.length !== 0) {
    //så länge fältet inte är tomt
    names[id] = newName; //väljer ut saken från arrayen namn med matchande id som vår parameter och fyller i med namnet från prompten
    saveToStorage(); //spara uppdaterad lista till datorns lokala minne
    makeList(); //kör funktionen makeList() för att uppdatera listan på html-sidan
  } else {
    //om promptfältet är tomt alertas användaren att det inte får vara tomt
    alert("Fältet får inte vara tomt.");
  }
}

function remove(id) {
  //funktionen remove med parameter id (parameter tas från texten i output-variabeln där vi specifierar vilket id-nummer varje array item har)
  let newNameArray = []; //skapar ny temporär array att lägga alla items som inte ska raderas i
  for (let i = 0; i < names.length; i++) {
    //loopa igenom arrayen
    if (i != id) {
      //om saken inte har det id som vi fått genom parametern läggs den i den temporära arrayen
      newNameArray.push(names[i]);
    }
  }
  names = newNameArray; //sparar den temporära arrayen som vår huvudarray
  saveToStorage(); //spara uppdaterad lista till datorns lokala minne
  makeList(); //kör funktionen makeList() för att uppdatera listan på html-sidan
}

function saveToStorage() {
  //funktion som hanterar sparning till lokalminnet
  localStorage.setItem("names", JSON.stringify(names)); //spara arrayen till lokalminnet
}

function clearStorage() {
  //funktion som vid knapptryck tar bort data sparat till lokalminnet
  localStorage.clear(); //ta bort sparad data
  makeList(); //kör funktionen makeList() för att uppdatera listan på html-sidan
  setTimeout(function () {
    //fördröjt alert så att alert syns samtidigt/efter uppdatering av listan skett (eftersom det såg fult ut att alerten kom innan listan uppdaterats tidigare)
    alert("Lagrad data har raderats och listan är återställd.");
  }, 100);
}

year(); //kör funktionen year()
function year() {
  const year = new Date().getFullYear(); //hämta aktuellt år och spara i en variabel
  const copy = document.getElementById("copy"); //hämtar och sparar paragrafen med id copy från html-sidan

  copy.innerHTML += ` ${year}`; //lägger på variabel bakom den text som finns i paragrafen sedan tidigare
}
