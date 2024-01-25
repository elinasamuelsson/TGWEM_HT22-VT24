using Microsoft.AspNetCore.Authentication.Cookies; //LÄGGER TILL STÖD FÖR AUTENTISERINGSCOOKIES
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(options => { options.LoginPath = "/Admin/Index/"; });
//LÄGGER TILL INLOGGNINGSMÖJLIGHETER OCH BESTÄMMER VART INLOGGNINGSSIDAN LIGGER, SAMT OMDIRIGERAR DIT OM INLOGGNING KRÄVS

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication(); //LÄGGER TILL STÖD FÖR/AKTIVERAR AUTENTISERING

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
