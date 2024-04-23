React concepts and API's used:
const element = React.createElement("tagName",{ attributes or props}, "what goes inside this tag");
  what goes inside tag: can be "text" or [] array of React elements that will be added as children of this element.

const root= React.createRoot(document.getElementById("")); // this function/API  creates an element in which the react components can be rendered. 

// usually only one Root and only one render

root.render(element);


