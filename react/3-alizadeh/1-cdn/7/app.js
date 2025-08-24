function Greeting({ className, name1, children }) {
  return (
    <div className={className}>
      <h1>hello {name1}</h1>
      {children}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <>
    <Greeting className="test" name1="ali">
      <h2>hello ram</h2>
      <hr />
    </Greeting>
  </>
);
