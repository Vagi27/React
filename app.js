
import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1",
    {
        id: 'title', className: "heading1"

    }, "This is h1 tag");

    const heading2 =  (<h1>Namastey React</h1>);   //JSX

    const container = React.createElement("div", {}, [heading1, heading2]);
    //react.createElement() => object => HTML code
    
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    // react is rendered inside the created root element of reactDOM.
    
    console.log(heading1);
    
root.render(container);

// console.log(React);
// console.log(ReactDOM);
// console.log(root.render);

// console.log(container);


// understanding this operator
    // const person={
    //     name:"vagish",
    //     print: function(){
    //         console.log(this);
    //     }
    // };

    // const person2={
    //     name:"malik",
    // }

    // console.log(person.print()); // this operator represents its parent
    // console.log(person.print.call()); // when binding with nothing, this operator refers to window object, 
    // console.log(person.print.call(person2)); // when binding with something, this operator refers to binded object, 

