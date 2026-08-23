using Microsoft.AspNetCore.Mvc;
using EcommercePortal.Models;


namespace EcommercePortal.Controllers
{
    
    public class productController : Controller
    {
        private static List<Product> products= new List<Product>()
        {
              new Product { Id = 101, Name = "Laptop", Price = 55000 },
            new Product { Id = 102, Name = "Mobile", Price = 25000 },
            new Product { Id = 103, Name = "Keyboard", Price = 1200 },
            new Product { Id = 104, Name = "Mouse", Price = 800 },
            new Product { Id = 105, Name = "Monitor", Price = 9000 }
        };
    


    // Display all products  to using a list 

    public IActionResult List()
        {
            return  View (products);
        }


     public IActionResult Details(int id)
        {
            Product product= products.FirstOrDefault(p=> p.Id==id);


            if (product== null)
            {
                return NotFound();
            }

            return View (product);
        }

    [HttpPost]

    public IActionResult Insert()
        {
            return View ();
        }


        [HttpPost]

    public IActionResult Insert(Product product)
        {
            products.Add(product);

            return RedirectToAction("List");
        }
}

}
