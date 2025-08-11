const users = [
  { id: 1, color: "red", fName: "ali", lName: "ram" },
  { id: 2, color: "green", fName: "negar", lName: "rad" },
  { id: 3, color: "blue", fName: "amin", lName: "arjmand" },
];

const User = ({ fName, lName, color }) => (
  <div>
    <h1 style={{ color }}>
      Hello {fName} {lName}
    </h1>
    <hr />
  </div>
);

const UsersList = ({ users }) => (
  <div>
    {users.map((user) => (
      <User key={user.id} {...user} />
    ))}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<UsersList users={users} />);
