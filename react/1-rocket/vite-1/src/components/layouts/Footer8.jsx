import { useRef, useState } from "react";
import CourseBox from "./CourseBox";

const Footer8 = () => {
  let courseList = [
    { id: 1, title: "css course", description: "css description" },
    { id: 2, title: "js course", description: "js description" },
    { id: 3, title: "react course", description: "react description" },
  ];

  const [courseL, setCourseL] = useState(courseList);
  const inputRef = useRef();

  const handleDelete = (id) => {
    setCourseL(courseL.filter((i) => i.id !== id));
  };

  const submitForm = (e) => {
    e.preventDefault();
    const title = inputRef.current.value.trim();
    if (title) {
      const newItem = { id: Date.now(), title };
      setCourseL((prev) => [...prev, newItem]);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h2>Footer Section 8:</h2>
      <form className="form1" onSubmit={submitForm}>
        <input type="text" placeholder="add product" ref={inputRef} />
        <button type="submit">Add</button>
      </form>

      <div className="CBoxs">
        {courseL.map((i) => (
          <CourseBox key={i.id} title={i.title} description={i.description}>
            <button onClick={() => handleDelete(i.id)}>delete</button>
          </CourseBox>
        ))}
      </div>
      <hr className="hr1" />
    </div>
  );
};

export default Footer8;
