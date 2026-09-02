namespace Catalog;
using System.Collections.Generic;
using Entities;

public class ProductService
{
    public static List<Product> products = new List<Product>()
    {
        new Product{ Id=1, Title="Gerbera", Price=78.8},
        new Product{ Id=2, Title="Rose", Price=8.8},
        new Product{ Id=3, Title="Tulip", Price=3.8},
        new Product{ Id=4, Title="Carnatia", Price=7.6},
        new Product{ Id=5, Title="Daisy", Price=5.0}
    };

    // GET
    public static List<Product> GetAll()
    {
        return products;
    }

    // INSERT
    public static string Insert(Product product)
    {
        products.Add(product);
        Console.WriteLine("New product insertion process");
        return "Product Inserted Successfully";
    }

    // UPDATE
    public static string Update(int id, Product product)
{
    Product? existingProduct = products.Find(p => p.Id == id);

    if (existingProduct == null)
        return "Product Not Found";

    existingProduct.Title = product.Title;
    existingProduct.Price = product.Price;

    return "Product Updated Successfully";
}

    // DELETE
    public static string Delete(int id)
{
    Product? product = products.Find(p => p.Id == id);

    if (product == null)
    {
        return "Product Not Found";
    }

    products.Remove(product);

    return "Product Deleted Successfully";
}
}