
class Person: ICloneable
{
    public string  Name{get;set;}
    public int Age{get;set;}

    public Date JoinDate{get;set;}

    public Person()
    {
        
    }
    Person(string n, int a, Date d)
    {
        this.Name=n;
        this.Age=a;
        this.JoinDate=d;
    }
    public object Clone()
    {
        return this.MemberwiseClone();   // shallow copy 
    }
}