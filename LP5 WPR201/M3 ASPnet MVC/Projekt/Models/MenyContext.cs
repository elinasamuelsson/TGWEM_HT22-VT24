using Microsoft.EntityFrameworkCore;

namespace Dayan_Pizzeria.Models
{
    public class MenyContext :DbContext
    {
        public DbSet<Item> Pizzor { get; set; } //BESTÄMMER NAMNET PÅ TABELLEN SOM SKA FINNAS I DATABASEN
        public MenyContext() 
        {
            Database.EnsureCreated(); //SER TILL ATT DATABASEN SOM KALLAS PÅ FINNS, ELLER SKAPAR EN OM DEN INTE FINNS
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=menyData.db"); //BESTÄMMER PLATS OCH NAMN PÅ DATABASEN
        }
    }
}
