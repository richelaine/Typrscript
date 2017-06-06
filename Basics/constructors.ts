// -- CONSTRUCTORS Sample --
// Constructor - a special method that is executed when a new instance of the class is being created
// Constructor methods must be named 'constructor'.
// You can only have 'one constructor per class'.

class Person // Object
{
    first_name: string;
    last_name: string;
    age: number;

    constructor( first_name: string, last_name: string, age: number ) // constructor
    {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
 
    greet() // method
    {
        console.log("Hello", this.first_name);
    }

    ageInYears(years: number): number // method
    {
        return this.age + years;
    }
}

// instantiate a new Person instance
var p: Person = new Person('Ron-Michael', 'Umayan', 25); 
p.greet();

// set initial age
p.age = 6;

// how old will he be in 12 years?
p.ageInYears(12);