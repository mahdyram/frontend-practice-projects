const users = [
  { id: 1, color: "red", fName: "ali", lName: "ram" },
  { id: 2, color: "green", fName: "negar", lName: "rad" },
  { id: 3, color: "blue", fName: "amin", lName: "arjmand" },
];

function User({ fName, lName, color }) {
  return (
    <div>
      <h1 style={{ color }}>
        Hello {fName} {lName}
      </h1>
      <hr />
    </div>
  );
}

function UsersList() {
  return (
    <div>
      {users.map(({ id, fName, lName, color }) => (
        <User key={id} fName={fName} lName={lName} color={color} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<UsersList />);
