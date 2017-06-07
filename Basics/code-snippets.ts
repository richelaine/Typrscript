//-- Fat Arrow Function Code Snippets --
// Fat Arrow Function( => ) - a shorthand notation for writing functions

// ES5 (Javascript) Example
var data = ['Skittles', 'Hershey', 'Kisses', 'Mallows'];
data.forEach( function(line) { console.log(line); });

// Typescript Example
var data: string[] = ['Skittles', 'Hershey', 'Kisses', 'Mallows'];
data.forEach( (line) => console.log(line) ); // <-- Replaced the word function by '=>'  

// Note: Parentheses are optional when there's only one parameter.


// Fat Arrow Function ( => ) as an 'EXPRESSION':
var evens = [ 2, 4, 6, 8 ];
var odds = evens.map( v => v + 1 );

// Fat Arrow Function ( => ) as a 'STATEMENT':
data.forEach( line => { console.log( line.toUpperCase ) });


// Fat Arrow Function ( => ) - shares the same 'this' as the surrounding code.

// Javascript Example
// w/o Fat Arrow Function
var ron = 
{
    name: "Ron-Michael",
    guitars: ["Gibson", "Martin", "Taylor"],
    printGuitars: function()
    {
        var self = this;
        this.guitars.forEach( function(g) 
        {
            console.log( self.name + " plays a " + g);
            // this.name is undefined so we have to use self.name
        })
    }
};

// w/ Fat Arrow Function
var michael =
{
    name: "Ron-Michael",
    guitars: ["Gibson", "Martin", "Taylor"],
    printGuitars: function()
    {
        this.guitars.forEach( (g) => 
        {
            console.log( this.name + " plays a " + g );
        });
    }
};





// -- TEMPLATE STRINGS --

// Two great features of "Template Strings" are:
// 1. Variables within strings ( without the need to concatenate with '+' )
// 2. Multi-line strings

// Variables in strings Example
var firstName = "Ron-Michael";
var lastName = "Dionisio";

// interpolate a string
var greeting = `Hello ${ firstName } ${ lastName }`;

console.log(greeting);

// Note: to use string interpolation you must enclose your string in 'backticks' not single or double qoutes.


// Multi-line strings
var template = 
`<div>
    <h1> Hello </h1>
    <p> This is a great website </p>
</div>`

// Multi-line string is a huge help when we want to put string in our code that are a little long, like 'templates'.