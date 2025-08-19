import { useEffect, useState } from "react";

export default function A10() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(5);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch(`https://dummyjson.com/users?limit=${count}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setUsers([...data.users]);
      } catch (err) {
        console.error(err.message);
      }
    }
    loadUsers();
  }, [count]);

  return (
    <div>
      <h3>Firs {count} users:</h3>

      <button onClick={() => setCount((c) => c + 5)}>Add Users</button>
      <br />

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
