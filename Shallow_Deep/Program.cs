using System.Runtime.CompilerServices;

class Program
{
    static void Main()
    {
        Date date=new Date(23,7,2026);
        Person original = new Person { Name = "Amit", Age = 30 ,JoinDate=date};
        Person copy1 = (Person)original.Clone();

        Console.WriteLine(original.Name); // Output: Amit
        Console.WriteLine(original.Age);


        Console.WriteLine(copy1.Name); // Output: Amit
        Console.WriteLine(copy1.Age);

         Console.WriteLine ("Chanding name of original \n");

        original.Name="Ravi";
        original.Age=90;
        original.JoinDate.day=31;

    }
}

