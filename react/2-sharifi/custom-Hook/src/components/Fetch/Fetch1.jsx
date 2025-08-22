import useFetch from "../hooks/useFetch";

export default function Fetch1() {
  let { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <h2>Fetch 1</h2>
      {loading && <h3>getting data...</h3>}
      {error && <h3>{error}</h3>}
      {!loading && !error && (
        <>
          <h3>data 0-10:</h3>
          <ul>
            {data.slice(0, 10).map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        </>
      )}
      <hr />
    </div>
  );
}
