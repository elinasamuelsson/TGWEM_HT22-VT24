using Dayan_Pizzeria.Models;
using Microsoft.AspNetCore.Authentication; //ANVÄNDER INBYGGDA FUNKTIONER FÖR AUTENTISERING OCH AUKTORISERING
using Microsoft.AspNetCore.Authentication.Cookies; //ANVÄNDER INBYGGDA FUNKTIONER FÖR AUTENTISERING OCH AUKTORISERING
using Microsoft.AspNetCore.Authorization; //ANVÄNDER INBYGGDA FUNKTIONER FÖR AUTENTISERING OCH AUKTORISERING
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Dayan_Pizzeria.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index() //INDEXSIDA FÖR ADMINCONTROLLERN
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Index(UserModel userModel, string returnUrl = "")
        {
            bool validUser = CheckUser(userModel); //ANVÄNDER FUNKTIONEN FÖR ATT KONTROLLERA ATT INLOGGNINGSUPPGIFTER STÄMMER.
            if (validUser == true)
            {
                var identity = new ClaimsIdentity(CookieAuthenticationDefaults.AuthenticationScheme); //SKAPA EN VARIABEL SOM SPARAR EN TOM INITIALISERING AV INLOGGNING
                identity.AddClaim(new Claim(ClaimTypes.Name, userModel.Username)); //LÄGGER TILL DATA TILL INITIALISERINGEN
                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(identity)); //UTFÖR INLOGGNING MED MOTTAGEN DATA OM DE STÄMMER ÖVERENS MED FUNKTIONEN CHECKUSER()
                if (returnUrl != "")
                {
                    return Redirect(returnUrl); //OM EN RETURNURL TAS MED FRÅN INLOGGNINGEN OMDIRIGERAS MAN DIT
                } else
                {
                    return RedirectToAction("AdminMenu", "Admin"); //OM EN RETURNURL INTE EXISTERAR OMDIRIGEARAS MAN TILL ADMINMENU
                }
            } else
            {
                ViewBag.ErrorMessage = "Inloggning misslyckades."; //OM INLOGGNINGSUPPGIFTER EJ STÄMMER VISA MEDDELANDE
                ViewData["ReturnUrl"] = returnUrl; //OM INLOGGNINGS MISSLYCKAS SPARAS RETURNURL FÖR ATT KUNNA ÅTERANVÄNDAS NÄR INLOGGNING LYCKAS
                return View();
            }
        }
        [Authorize]
        public IActionResult AdminMenu() //LÖSENORDSSKYDDAD SIDA MED MENY FÖR ADMINVAL
        {
            return View();
        }
        private bool CheckUser(UserModel userModel) //FUNKTION FÖR KONTROLL AV INLOGGNINGSUPPGIFTER. VANLIGTVIS EJ HÅRDKODAT.
        {
            if (userModel.Username.ToLower() == "admin" && userModel.Password == "password") //OM USERNAME MATCHAR "admin" (OAVSETT OM DET ÄR SKRIVET I VERSALER ELLER GEMENER, SAMT PASSWORD ÄR "password" RETURNERAR FUNKTIONEN TRUE NÄR KALLAD. ANNARS FALSE.
            {
                return true;
            } else { 
                return false; 
            }
        }

        public async Task<IActionResult> SignOutUser() //UTLOGGNINGSFUNKTION SOM OMDIRIGERAR TILL STARTSIDAN VIA EN <A>-TAGG PÅ ADMINCONTROLLERNS INDEXSIDA
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Index", "Home");
        }
    }
}
