using Microsoft.AspNetCore.Builder;
using BankApplication.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddScoped<IBankService, BankService>();

var app = builder.Build();

app.MapControllers();

app.Run();