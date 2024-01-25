// Vad skrivs ut?

var personA = {firstName:"Thomas", lastName:"Lundqvist", age:47, favorite:"apple"}
// deklarerar en ny variabel personA i en array - förnamn, efternamn, ålder, favoritfrukt
var personB = personA;
// deklarerar en ny variabel och säger att den har samma innehåll som personA

personB.favorite = "pear";
// ändrar personB favoritfrukt till päron

printit(personA);
// använder sig av funktionen printit (nedan) för att logga personA till konsollen
// bör visa Thomas likes apple

/* FEL! Efter test och googling förstår jag nu att när man deklararerar var personB = personA 
så skapar man en länk mellan dem snarare än en ny variabel. När man ändrar B ändrar man
således också A. För att undvika detta  */

printit(personB);
// använder sig av funktionen printit (nedan) för att logga personB till konsollen
// bör visa Thomas likes pear

personA = {firstName:"Robert", lastName:"Andersson Dahlberg", age:23, favorite:"banana"}
// ändrar personA med ny information

printit(personA);
// använder sig av funktionen printit (nedan) för att logga personA till konsollen
// bör visa Robert likes banana
printit(personB);
// använder sig av funktionen printit (nedan) för att logga personB till konsollen
// bör visa Thomas likes pear

function printit(person) {
     console.log(person.firstName + " likes " + person.favorite);
} // deklarerar en funktion att använda ovan för att logga text till konsollen