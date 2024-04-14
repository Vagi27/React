import React from "react";
import ReactDOM from "react-dom";

const heading1 = React.createElement("h1",
    {
        id: 'title', className: "heading1"

    }, "This is h1 tag");

const heading2 = React.createElement("h2",
    {
        id: 'title', className: "heading2", style: { backgroundColor: "red" }

    }, "This is h2 tag");

const container = React.createElement("div", {}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// react is rendered inside the created root element of reactDOM.

root.render(container);
console.log(React);
// console.log(container);



const person={
    name:"vagish",
    print: function(){
        console.log(this);
    }
};

const person2={
    name:"malik",
}

console.log(person.print()); // this operator represents its parent
console.log(person.print.call()); // when binding with nothing, this operator refers to window object, 
console.log(person.print.call(person2)); // when binding with something, this operator refers to binded object, 

