function Greeting({ className, name1 = "world1", name2 = "world2" }) {
  return (
    <div className={className}>
      <h1>hello {name1}</h1>
      <h2>hello {name2}</h2>
      <hr />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <>
    <Greeting />
    <Greeting className="test" />
    <Greeting className="test" name1="ali" />
    <Greeting className="test" name1="ali" name2="ram" />
  </>
);
