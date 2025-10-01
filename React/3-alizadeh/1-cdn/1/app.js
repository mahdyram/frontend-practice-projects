// const element = React.createElement("h1", null, "Hello React!");

// const element = React.createElement("div", null, ["Hello React!", " Hello User"]);

// const element = React.createElement("div", null, React.createElement("h2", null, "Hello World"));

const element = React.createElement("div", { className: "myReact" }, [
  React.createElement(
    "h2",
    { title: "H-W", href: "http://ali.ir" },
    "Hello World"
  ),
  React.createElement(
    "h3",
    { style: { color: "red", backgroundColor: "pink", fontSize: 25 } },
    "Hello User"
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(element);
