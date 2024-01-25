using System.ComponentModel.DataAnnotations;

namespace Dayan_Pizzeria.Models
{
    public class UserModel //MODELL SOM HANTERAR ANVÄNDARDATAN VID INLOGGNING
    {
        public string Username { get; set; }
        [DataType(DataType.Password)] //STÄLLER IN UNDERLIGGANDE STRING SOM ETT LÖSENORD OCH DÖLJER TECKNEN MAN KNAPPAR IN
        public string Password { get; set; }
    }
}
