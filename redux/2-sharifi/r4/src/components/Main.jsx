import { useDispatch, useSelector } from "react-redux";
import { addProduct, addUser } from "../redux/actions";

export default function Main() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h1>Combine-reducers & Middleware-logger</h1>
      <hr className="hr1" />

      <button onClick={() => dispatch(addUser("ram"))}>Add user</button>
      <br />

      <ul>
        {users.map((u) => (
          <li key={u}>{u}</li>
        ))}
      </ul>
      <br />

      <button onClick={() => dispatch(addProduct("apple"))}>Add product</button>
      <br />

      <ul>
        {products.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
