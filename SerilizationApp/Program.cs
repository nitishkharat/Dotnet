using System;
using SerilizationApp.Models;
using System.Text.Json;


class Program
{
   public static void Main()
    {

        Student student= new Student
        {
            Id=1,
            Name = "Rahul",
            Age = 22
        };

        //Here serilizaation 
        string Json= JsonSerializer.Serialize(student);
        Console.WriteLine("Serilize Json:");
        Console.WriteLine(Json);

        //Deserilization Here 
         Student newStudent = JsonSerializer.Deserialize<Student>(Json);
         Console.WriteLine($"Id: {newStudent.Id}, Name:{newStudent.Name}, Age:{newStudent.Age}");




    }
}