using  Catalog;
using Entities;

var builder = WebApplication.CreateBuilder(args); //instance of WebApplication Builder
var app = builder.Build(); //instance of WebApplication

//http://localhost:5296
//api endpoint url(action) -----------callback function (handler)
app.MapGet("/api/customers", () =>
    {
        return  "saloni, tejas, sejal";
    });
app.MapGet("/api/cart", () =>
    {
        return  "laptop-2, samsung-6, earbuds-8";
    });
app.MapGet("/api/orders", () =>
    {
        return  "ord123, ord432, ord987";
    });

// Product API endpoints
// GET ALL
app.MapGet("/api/products", () =>
    {
        return ProductService.GetAll();
    });


// INSERT
app.MapPost("/api/products", (Product product) =>
    {
        return ProductService.Insert(product);
    });

// UPDATE
app.MapPut("/api/products/{id}", (int id, Product product) =>
    {
        return ProductService.Update(id, product);
    });

// DELETE
app.MapDelete("/api/products/{id}", (int id) =>
    {
        return ProductService.Delete(id);
    });

app.Run();