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