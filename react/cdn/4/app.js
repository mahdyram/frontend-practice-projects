function Greeting(props) {
  console.log(props); // {className: 'test', name1: 'ali', style: {…}, name2: 'world2'}

  return (
    <div className={props.className}>
      <h1 style={props.style}>hello {props.name1}</h1>
      <h1 style={props.style}>hello {props.name2}</h1>
    </div>
  );
}

Greeting.defaultProps = {
  name1: "world1",
  name2: "world2",
};

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<Greeting className="test" name1="ali" style={{ color: "red" }} />);
