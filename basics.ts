// -- METHODS Sample --
// Methods - functions that run in context of an object.

class Person // Object
{
    first_name: string;
    last_name: string;
    age: number;
 
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
var p: Person = new Person(); 

// set initial age
p.age = 6;

// how old will he be in 12 years?
p.ageInYears(12);