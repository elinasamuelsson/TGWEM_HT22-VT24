using Dayan_Pizzeria.Models;
using Microsoft.AspNetCore.Authorization; //ANVÄNDER INBYGGDA FUNKTIONER FÖR AUTENTISERING OCH AUKTORISERING
using Microsoft.AspNetCore.Mvc;

namespace Dayan_Pizzeria.Controllers
{
    public class MenyController : Controller
    {
        public IActionResult Index() //INDEXSIDA FÖR MENYCONTROLLERN
        {
            using (MenyContext db = new MenyContext()) //ÖPPNAR UPP OCH HANTERAR KOPPLING MED DATABASEN
            {
                List<Item> pizzor = db.Pizzor.ToList(); //SKAPAR EN LISTA MED PIZZOR FRÅN DATABASEN BASERAD PÅ MODELLEN ITEM
                return View(pizzor); //SKICKAR LISTAN TILL VIEWN
            }
        }
        public IActionResult Ingredienser(int id) //SIDA SOM VISAR ALLA INGREDIENSER PÅ VALD PIZZA. TAR EMOT VARIABELN id FRÅN INDEXSIDAN NÄR MAN KLICKAR PÅ LÄNKEN "SE INGREDIENSER"
        {
            using (MenyContext db = new MenyContext()) //ÖPPNAR UPP OCH HANTERAR KOPPLING MED DATABASEN
            {
                Item pizza = db.Pizzor.Find(id); //LETAR UPP DEN PIZZA SOM HAR MATCHANDE ID MED DEN LÄNK SOM KLICKAS PÅ I MENYN I DATABASEN
                return View(pizza); //SKICKAR DEN PIZZAN TILL VIEWN OCH VISAR UPP INGREDIENSERNA
            }
        }
        [Authorize] //ENDAST INLOGGADE ANVÄNDARE KAN KOMMA ÅT DENNA SIDA
        public IActionResult Create() //SIDA FÖR ATT LÄGGA TILL PIZZOR
        {
            return View();
        }
        [HttpPost] //HTTPPOST FÖR ATT SKICKA NYA DATAN TILL DATABASEN
        public IActionResult Create(Item nyPizza) //TAR EMOT DATA FRÅN CREATESIDAN OCH SPARAR DEN I VARIABELN nyPizza
        {
            using (MenyContext db = new MenyContext()) //ÖPPNAR UPP OCH HANTERAR KOPPLING MED DATABASEN
            {
                db.Pizzor.Add(nyPizza); //LÄGGER TILL DATAN I VARIABELN TILL DATABASEN
                db.SaveChanges(); //SPARAR ÄNDRINGAR I DATABASEN
            }
            return RedirectToAction("Index", "Meny"); //OMDIRIGERAR TILL MENYCONTROLLERNS INDEX 
        }
        [Authorize] //ENDAST INLOGGADE ANVÄNDARE KAN KOMMA ÅT DENNA SIDA
        public IActionResult Edit(int id) //SIDA SOM LÅTER ANVÄNDARE REDIGERA PIZZORNA. TAR EMOT VARIABELN id FRÅN MENY-INDEXSIDAN NÄR MAN KLICKAR PÅ LÄNKEN "EDIT"
        {
            using (MenyContext db = new MenyContext()) //ÖPPNAR UPP OCH HANTERAR KOPPLING MED DATABASEN
            {
                Item pizza = db.Pizzor.Find(id); //LETAR UPP DEN PIZZA SOM HAR MATCHANDE ID MED DEN LÄNK SOM KLICKAS PÅ I MENYN I DATABASEN
                return View(pizza); //SKICKAR DEN PIZZAN TILL VIEWN OCH VISAR UPP DATAN
            }
        }
        [HttpPost] //HTTPPOST FÖR ATT SKICKA DEN ÄNDRADE DATAN TILL DATABASEN
        public IActionResult Edit(Item pizza) //TAR EMOT DATA FRÅN CREATESIDAN OCH SPARAR DEN I VARIABELN pizza
        {
            using (MenyContext db = new MenyContext()) //ÖPPNAR UPP OCH HANTERAR KOPPLING MED DATABASEN
            {
                db.Update(pizza); //UPPDATERAR DATABASEN MED DATAN I VARIABELN pizza
                db.SaveChanges(); //SPARAR ÄNDRINGAR I DATABASEN

                return RedirectToAction("AdminMenu", "Admin"); //OMDIRIGERAR TILL ADMINCONTROLLERNS ADMINMENY
            }
        }
        [Authorize] //ENDAST INLOGGADE ANVÄNDARE KAN KOMMA ÅT DENNA SIDA
        public IActionResult Delete(int id) //SIDA SOM LÅTER ANVÄNDARE RADERA PIZZOR. TAR EMOT VARIABELN id FRÅN MENY-INDEXSIDAN NÄR MAN KLICKAR PÅ LÄNKEN "DEL"
        {
            using (MenyContext db = new MenyContext()) //ÖPPNAR UPP OCH HANTERAR KOPPLING MED DATABASEN
            {
                Item pizza = db.Pizzor.Find(id); //LETAR UPP DEN PIZZA SOM HAR MATCHANDE ID MED DEN LÄNK SOM KLICKATS PÅ I MENYN I DATABASEN
                return View(pizza); //SKICKAR DEN PIZZAN TILL VIEWN OCH VISAR UPP DATAN
            }
        }
        [HttpPost] //HTTPPOST FÖR ATT SKICKA DEN BORTTAGNA DATAN TILL DATABASEN
        public IActionResult Delete(Item pizza) //TAR EMOT DATA FRÅN DELETESIDAN OCH SPARAR DEN I VARIABELN pizza
        {
            using (MenyContext db = new MenyContext()) //ÖPPNAR UPP OCH HANTERAR KOPPLING MED DATABASEN
            {
                db.Pizzor.Remove(pizza); //TAR BORT DEN ANGIVNA DATAN I VARIABELN FRÅN DATABASEN
                db.SaveChanges(); //SPARAR ÄNDRINGAR I DATABASEN

                return RedirectToAction("AdminMenu", "Admin"); //OMDIRIGERAR TILL ADMINCONTROLLERNS ADMINMENY
            }
        }
    }
}
