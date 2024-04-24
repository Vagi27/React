import React from "react";
import ReactDOM from "react-dom/client";

//react.createElement() => object => HTML code

// -----------------------------------------------------------------
// create Element implementation
const heading1 = React.createElement("h1", {}, "This is h1 tag");

const heading2 = React.createElement("h2", {}, "this is h2 tag");
const heading3 = React.createElement("h3", {}, "this is h3 tag");

const container = React.createElement(
  "div",
  {
    className: "title",
  },
  [heading1, heading2, heading3]
);

// console.log(heading1);
// -----------------------------------------------------------------

// -----------------------------------------------------------------
//JSX element implementation:
const heading4 = (
  <div className="title">
    <h1>this is h1 tag</h1>
    <h2>this is h2 tag</h2>
    <h3>this is h3 tag</h3>
  </div>
);
// -----------------------------------------------------------------

/* difference b/w jsx element and functional component is just that:
 ->  component is declared as a function, whereas, an element is not. */

/* In JSX, lower-case tag names are considered to be HTML tags. However, lower-case tag names with a dot (property accessor) aren't.

*-> See HTML tags vs React Components.

* <component /> compiles to React.createElement('component') (html tag)
* <Component /> compiles to React.createElement(Component)
* <obj.component /> compiles to React.createElement(obj.component)
*/

// -----------------------------------------------------------------
//functional Component implementation:
/*
 *-> heading5() with lower case letters can be rendered.
 *-> <heading5 /> in small case. cannot be rendered.
 *-> since lower case name of components will be treated as html tags.
 *-> First letter of component must be capital to render it using angular brackets. */
const Heading5 = () => {
  return (
    <div className="title">
      <h1>this is h1 tag</h1>
      <h2>this is h2 tag</h2>
      <h3>this is h3 tag</h3>
    </div>
  );
};
// -----------------------------------------------------------------

// -----------------------------------------------------------------
// equivalent of functional component implementation

const Heading6 = () => (
  <div className="title">
    <h1>this is h1 tag</h1>
    <h2>this is h2 tag</h2>
    <h3>this is h3 tag</h3>
  </div>
);

// -----------------------------------------------------------------

// -----------------------------------------------------------------
//implementation with angular brackets did not work until first letter of functional Component is made capital
// Composition of Component (Add a component inside another)
// or 
//Nested components or component composition
const Heading7 = () => (
  <div>
    {<Heading6 />}
    <h4> this is h4 tag</h4>
  </div>
);
// -----------------------------------------------------------------


// -----------------------------------------------------------------
  //Ways of Styling
const Jsx = () => (
  <div style={{backgroundColor: "red"}}>
    <h1>home</h1>
    <h1> about</h1>
  </div>
);

// or , declare style seperately then put in jsx as object 
const styleObj={
  backgroundColor:"blue"
  
}

const Jsx2=()=>(
  <div style={styleObj}>
    <h1>This is styled div </h1>
  </div>

);

// -----------------------------------------------------------------

// react is rendered inside the created root element of ReactDOM.
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);

// root.render(heading4);

// root.render(Heading5()); or root.render(<Heading5/>);

// root.render(<Heading5 />);

// root.render(Heading6());
// root.render(<Heading6 />);

root.render(<Heading7 />);
