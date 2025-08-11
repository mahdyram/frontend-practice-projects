// const element = React.createElement("div", { className: "myReact" }, [
//   React.createElement(
//     "h2",
//     { title: "H-W", href: "http://ali.ir" },
//     "Hello World"
//   ),
//   React.createElement(
//     "h3",
//     { style: { color: "red", backgroundColor: "pink", fontSize: 25 } },
//     "Hello User"
//   ),
// ]);

const element = (
  <div className="myReact">
    <h2 title="H-W" href="http://ali.ir">
      Hello World
    </h2>
    <h3 style={{ color: "red", backgroundColor: "pink", fontSize: 25 }}>
      Hello User
    </h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(element);
