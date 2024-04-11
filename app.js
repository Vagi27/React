const heading1 = React.createElement("h1",
    {
        id: 'title', className: "heading1"

    }, "This is h1 tag");

const heading2 = React.createElement("h2",
    {
        id: 'title', className: "heading2"

    }, "This is h2 tag");

const container = React.createElement("div", {}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

console.log(container);

