export default function A3() {
  let fruits = ["apple", "banana", "orange", "mango"];

  let users = [
    { id: 1, name: "ali" },
    { id: 2, name: "amir" },
    { id: 3, name: "sara" },
  ];

  return (
    <div>
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />

      <ul>
        {users.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>

      <ul>
        {users.map((item) => {
          const { id, name } = item;
          return <li key={id}>{name}</li>;
        })}
      </ul>

      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <hr className="hr1" />
    </div>
  );
}
