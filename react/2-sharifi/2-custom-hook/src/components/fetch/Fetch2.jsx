import useFetch from "../hooks/useFetch";

export default function Fetch2() {
  let { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <h2>Fetch 2</h2>
      {loading && <h3>getting data...</h3>}
      {error && <h3>{error}</h3>}
      {!loading && !error && (
        <>
          <h3>data 85-100:</h3>
          <ul>
            {data.slice(85, 100).map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
