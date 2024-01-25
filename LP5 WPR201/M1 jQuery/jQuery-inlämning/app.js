$(document).ready(function () {
  $("#btn-changebg").on("click", function () {
    //hämta knapp och starta funktion vid klick
    var hexPos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    //variabel med alla möjliga hexkomponenter att hämta data från
    var hexResult = "#";
    //variabel att lägga hexkomponentdata i
    function randomNumber() {
      //fuktion för att hämta slumpat nummer mellan 0 och 16
      return Math.floor(Math.random() * 16);
    }

    for (let i = 0; i < 6; i++) {
      // loop som rullar 6 gånger (efter 6 hexkomponenter i en färg) och med hjälp av funktionen randomNumber hämtar en slumpad komponent i arrayen hexPos och lägger till den i slutet av hexResult
      hexResult += hexPos[randomNumber()];
    }
    $("body").css("background-color", hexResult);
    //ändrar css:en för bakgrundsfärgen på body till den slumpade hexkoden
  });

  $("li > a").on("mouseenter", function () {
    //under en mouseenter sker nedan förändringar på css:en i navmenyn
    $(this).css("font-size", "30px");
    $(this).css("color", "#4a5043");
    $(this).css("text-decoration", "underline");
  });

  $("li > a").on("mouseleave", function () {
    //under en mouseleave sker nedan förändringar på css:en i navmenyn
    $(this).css("font-size", "16px");
    $(this).css("color", "#112a46");
    $(this).css("text-decoration", "none");
  });

  $("button").on("mouseenter", function() {
    //under en mouseenter sker nedan förändringar på alla knappars css
    $(this).css("background-color", "rgba(255, 255, 255, 0.3)")
    $(this).css("box-shadow", "2px 2px 2px rgba(0, 0, 0, 0.5)")
  })

  $("button").on("mouseleave", function() {
    //under en mouseleave sker nedan förändringar på alla knappars css
    $(this).css("background-color", "rgba(255, 255, 255, .1)")
    $(this).css("box-shadow", "1px 1px 1px rgba(0, 0, 0, 0.5)")
  })

  $("#btn-hide").on("click", function () {
    //gömmer bilden när man klickar på knappen
    $(".bio-img").hide();
  });
  $("#btn-show").on("click", function () {
    //visar bilden när man trycker på knappen
    $(".bio-img").show();
  });

  $("#btn-animate").on("click", function() {
    //animerar bilden i presentations"fliken" när man trycker på knappen
    $(".bio-img").animate(
      {width: "100px",
    opacity: 0.9}, {duration: 1000,
    complete: function(){
      //när animeringen är över sker en till animering där ändringarna återställs
      $(this).animate(
        {width: "150px",
      opacity: 1.0}, 1000
      )
    }}
    )
  })

  $("i").on("mouseenter", function() {
    //vid en mouseenter läggs klassen "icon-big" till på alla ikoner
    $(this).addClass("icon-big")
  })

  $("i").on("mouseleave", function() {
    //vid en mouseleave tas klassen "icon-big" bort från alla ikoner
    $(this).removeClass("icon-big")
  })
})