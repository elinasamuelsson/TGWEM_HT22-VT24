var tal1 = 10;
var tal2 = 20;
// definierar två tal, tal1 och tal2 och tilldelar dem 10 respektive 20 som värde

if (tal1 == 10) {
tal2 = tal1;
} // om tal1 är lika med 10, är tal2 detsamma som 10

if (tal2 > 10) {
alert("hej"); /* om tal2 är större än 10 får vi alert "hej". tal2 är dock nu densamma som tal1, 
alltså inte större än 10, eftersom tal1 är exakt 10 */
} else {
alert("hmm");
tal1 = 5;
} /* i alla andra fall får vi alert "hmm" och tal1 ändras till 5. Eftersom tal2 är detsamma som tal1 
ändras även tal2 till 5. Detta är vad som händer när koden körs */

if (tal1 >= tal2 || tal2 == 10) {
alert("Glad påsk!"); /* om tal1 är lika med eller större än, eller om tal2 är lika med 10 får vi 
alert "Glad påsk!". Eftersom tal1 och tal2 faller inom första kategorin kommer koden att alerta "Glad 
påsk!" när den körs */
} else if (tal1 == tal2) {
alert("God jul!"); /* om ovan inte stämmer, och tal1 är detsamma som tal2 alertas "God jul!" */
}

// kommer alerta "hmm" och sedan "Glad påsk!"