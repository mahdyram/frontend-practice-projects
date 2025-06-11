// import React from "react"; // faghat vaghti lazeme ke az React.createElement estefade mikonim, na jsx.
// import ReactDOM from "react-dom/client";

// 1- React.createElement:

// const element = React.createElement(
//   "div",
//   { id: "app", className: "container" },
//   "Hello World 1"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

// ----------------------------------------
// 2- JSX:

// import ReactDOM from "react-dom/client";

// const element = (
//   <div id="app" className="container">
//     Hello World 2
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

// ----------------------------------------
// 3- Functional Component (best):

// import ReactDOM from "react-dom/client";

// function App() {
//   return (
//     <div id="app" className="container">
//       Hello World 3
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

/*
vghti brname ma varede scale motavasset shavad, bar asas rabete karbari ke darim,
teadade in component ha ziad mishavad, be hamin dalil mantaghi nist ke tamame component
hayeman ra dadkhl fail index.js tosee dahim, kheili behtar ast ke ma baraye harkodam az in 
component ha yek fail mojazza dar nazar begirim va har ja niaz shod estefade ya be estelah farakhani konimeshon.
baraye inkar yek fail dar src dorost mikonim be esme App.js ke kod haie component App ra shamel khahad shod.
*/

// ----------------------------------------
// 4- Functional-Component (in another fail):

import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
