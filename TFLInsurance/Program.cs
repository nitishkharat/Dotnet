// var builder = WebApplication.CreateBuilder(args);

// // Add services to the container.

// builder.Services.AddControllers();
// // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
// builder.Services.AddOpenApi();

// var app = builder.Build();

// // Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.MapOpenApi();
// }

// app.UseHttpsRedirection();

// app.UseAuthorization();

// app.MapControllers();

// app.Run();


using TFLInsurance.Interfaces;
using TFLInsurance.Repositories;
using TFLInsurance.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Register Repository
builder.Services.AddScoped<IAgentsRepository, AgentsRepository>();

// Register Service
builder.Services.AddScoped<IAgentsService, AgentsService>();

var app = builder.Build();

app.UseHttpsRedirection();

app.MapControllers();

app.Run();