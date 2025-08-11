function Greeting(props) {
  console.log(props); // {className: 'test', name1: 'ali', children: 'ram'}

  return (
    <div className={props.className}>
      <h1>hello {props.name1}</h1>
      <h2>hello {props.children}</h2>
      <hr />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <>
    <Greeting className="test" name1="ali">
      ram
    </Greeting>
  </>
);
