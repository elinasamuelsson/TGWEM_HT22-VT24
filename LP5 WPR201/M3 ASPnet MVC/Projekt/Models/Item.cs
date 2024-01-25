namespace Dayan_Pizzeria.Models
{
    public class Item //MODELL SOM HANTERAR DATAN FRÅN DATABASENS TABELL
    {
        public int Id { get; set; }
        public string Namn { get; set; }
        public string Pris { get; set; }
        public string Ingredienser { get; set; }
    }
}
