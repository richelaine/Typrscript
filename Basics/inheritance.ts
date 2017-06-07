// -- INHERITANCE Sample --
// Inheritance - a way to indicate that a class receives behavior from a parent class.
//               Then we can override, modify or augment those behaviors on the new class.
// Inheritance is achieved through the extends keyword

class Report 
{
    data: Array<string>; // property 'data' that has an array of strings

    constructor( data: Array<string>)
    {
        this.data = data;
    }

    run() // we loop over each element of data and print the out using console.log
    {
        this.data.forEach( function(line) { console.log(line); }); 
        // forEach is a method on Array that accepts a 'function' as an argument and calls that function 
        //         for each element in the Array
    }
}

var r: Report = new Report( ['First line', 'Second line'] );
r.run(); // prints out the lines



class TabbedReport extends Report // <-- Inheritance
{
    headers: Array<string>;

    constructor( headers: string[], values: string[] )
    {
        super(values)
        this.headers = headers;
    }

    run()
    {
        console.log( this.headers );
        super.run();
    }
}

var headers: string[] = ['Name'];
var data: string[] = ['Skittles', 'Hershey', 'Kisses', 'Mallows'];
var m: TabbedReport = new TabbedReport( headers, data)
m.run();