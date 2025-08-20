import { useEffect, useState } from "react";

function Child() {
  useEffect(() => {
    console.log("Mount (banner)");

    const bannerTimeout = setTimeout(() => {
      console.log("show banner");
    }, 5000);

    return () => {
      // clearTimeout(bannerTimeout); //! bedoone in khat, agar baed az mount, belafasele unmount konim, baz ham baed az 5 sanie, "show banner" be ma namayesh dade mishavad.
      console.log("Unmount (banner)");
    };
  }, []);

  return (
    <div className="countBox">
      <h3>hello</h3>
    </div>
  );
}

export default function A13() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "velesh kon log nakon (unmount)" : "banner ro log kon (mount)"}
      </button>
      {show && <Child />}
      <hr className="hr1" />
    </div>
  );
}
