import { useState } from "react";
import CourseBox from "./CourseBox";

const Footer7 = () => {
  let courseList = [
    { id: 1, title: "css course", description: "css description" },
    { id: 2, title: "js course", description: "js description" },
    { id: 3, title: "react course", description: "react description" },
  ];

  const [courseL, setCourseL] = useState(courseList);
  const [courseTitle, setCourseTitle] = useState("");

  const handleDelete = (id) => {
    setCourseL(courseL.filter((i) => i.id !== id));
  };

  const submitForm = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const newProduct = { id: id, title: courseTitle };
    if (courseTitle.trim() != "") {
      setCourseL((prev) => [...prev, newProduct]);
      setCourseTitle("");
    }
  };

  return (
    <div>
      <h2>Footer Section 7:</h2>
      <form className="form1" onSubmit={submitForm}>
        <div>
          <input
            type="text"
            placeholder="add product"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          />
        </div>
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

export default Footer7;
