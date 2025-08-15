const links = [
  {
    name: "Facebook",
    url: "https://Facebook.com",
    color: "blue",
  },
  {
    name: "Instagram",
    url: "https://Instagram.com",
    color: "purple",
  },
  {
    name: "Google",
    url: "https://Google.com",
    color: "red",
  },
];

const element = (
  <ul>
    {links.map(({ name, url, color }) => (
      <li key={name}>
        <h3>{name} link:</h3>
        <a href={url} style={{ color }}>
          {name}
        </a>
        <hr />
      </li>
    ))}
  </ul>
);

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(element);
