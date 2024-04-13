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

console.log(container);

