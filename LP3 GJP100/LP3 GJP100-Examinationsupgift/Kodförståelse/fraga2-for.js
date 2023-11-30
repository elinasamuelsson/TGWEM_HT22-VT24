var tal1 = 10;
var tal2 = 20;
// definierar två tal, tal1 och tal2 och tilldelar dem 10 respektive 20 som värde

for(var i=0; i < tal2; i++)
// loopar så länge variabeln i är mindre än tal2. Vid varje iteration adderas i med 1.
  {
  if(i>tal1 && i != 13)
  // om i är större än tal1 OCH i inte är lika med 13
    {
    alert(i);
    } // alertar variabeln i
  }

// alertar från 11 till 19 med undantag för 13, eftersom if-satsen kräver detta