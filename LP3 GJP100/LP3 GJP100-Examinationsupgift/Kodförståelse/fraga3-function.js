function getGrade(studentPoints,minPointsForG,minPointsForVG) /* funktion med inparametrar för studentens
resultat, minimum poäng för G, minimum poäng för VG */
  {
  if (studentPoints < minPointsForG)
    {
    return "U";
    } // inparameter 1, studentens resultat är mindre än minimum för G returnerar funktionen U
  else if(studentPoints < minPointsForVG)
    {
    return "G";
    } // inparameter 1, studentens resultat är mindre än minimum för VG returnerar funktionen G
  else
    {
    return "VG";
    } // om ovan inte stämmer returnerar funktionen VG
  }

alert(getGrade(5,10,16)); // skickar inparametrar till funktionen och alertar resultatet
alert(getGrade(12,10,16)); // skickar inparametrar till funktionen och alertar resultatet
alert(getGrade(18,10,16)); // skickar inparametrar till funktionen och alertar resultatet

var grade = getGrade(8,10,16);
// definierar en funktion och använder resultatet av funktionen och dess inparametrar som värde/string
if (grade == "U")
  {
  alert("tyvärr du fick "+ grade +" och behöver göra omexamination")
  } /* om variabeln grade är lika med "U" visas ett alert med ovan text. Eftersom 8 är under gränsen kommer
  kommer if-satsen att alerta texten */

/* Alertar först U, sedan G, sedan VG, följt av ett sista alert som säger "tyvärr du fick U och behöver göra en omexamination" */