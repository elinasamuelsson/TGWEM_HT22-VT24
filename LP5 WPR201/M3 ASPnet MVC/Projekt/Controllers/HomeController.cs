using Microsoft.AspNetCore.Mvc;

namespace Dayan_Pizzeria.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() //INDEXSIDA FÖR HOMECONTROLLERN
        {
            return View();
        }
        public IActionResult Nyheter() //OFÄRDIG NYHETSSIDA
        {
            return View();
        }
        public IActionResult Kontakt() //OFÄRDIG KONTAKTSIDA
        {
            return View();
        }
    }
}
