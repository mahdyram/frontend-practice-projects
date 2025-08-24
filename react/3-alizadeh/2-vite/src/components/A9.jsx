import { useEffect, useState } from "react";

export default function A9() {
  const [users, setUsers] = useState([]);

  console.log(users);

  //! Anti-pattern: fetch inside component body (Side-effect in render)
  // async function loadUsers() {
  //   try {
  //     const res = await fetch("https://dummyjson.com/users?limit=10");
  //     if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  //     const data = await res.json();
  //     console.log(data.users);
  //     setUsers([...data.users]);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }
  // loadUsers();

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("https://dummyjson.com/users?limit=10");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setUsers([...data.users]);
      } catch (err) {
        console.error(err.message);
      }
    }
    loadUsers();
  }, []); // [] yaeni faghat bare avval ejra(mount) mishavad.

  return (
    <div>
      <h3>10 users:</h3>

      <ul>
        {users.map(({ id, firstName, lastName }) => (
          <li key={id}>
            {firstName} {lastName}
          </li>
        ))}
      </ul>
      <hr className="hr1" />
    </div>
  );
}
