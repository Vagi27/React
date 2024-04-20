
import React from "react";
import ReactDOM from "react-dom/client";

//react.createElement() => object => HTML code
const heading1 = React.createElement("h1",
    {
        id: 'title', className: "heading1"

    }, "This is h1 tag"
);


console.log(heading1);

const heading2 = (<h1>Namastey React</h1>);   //JSX

const container = React.createElement("div", {}, [heading1, heading2]);

// react is rendered inside the created root element of reactDOM.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
