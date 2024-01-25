using Microsoft.AspNetCore.Authentication.Cookies; //L�GGER TILL ST�D F�R AUTENTISERINGSCOOKIES
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(options => { options.LoginPath = "/Admin/Index/"; });
//L�GGER TILL INLOGGNINGSM�JLIGHETER OCH BEST�MMER VART INLOGGNINGSSIDAN LIGGER, SAMT OMDIRIGERAR DIT OM INLOGGNING KR�VS

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication(); //L�GGER TILL ST�D F�R/AKTIVERAR AUTENTISERING

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
