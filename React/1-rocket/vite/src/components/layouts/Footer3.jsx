import { useState } from "react";
import CourseBox from "./CourseBox";

function Footer3() {
  let data1 = ["name one", "name two", "name three"];
  let data2 = data1.map((i) => <p>{i}</p>);

  let courseList1 = [
    { id: 1, title: "css course", description: "css description" },
    { id: 2, title: "js course", description: "js description" },
    { id: 3, title: "react course", description: "react description" },
  ];

  const [courseL2, setCourseL2] = useState([]);
  const handleCourseBoxes = () => {
    setCourseL2(courseList1);
  };

  const [showCourses, setShowCourses] = useState(false);

  const [showCourses2, setShowCourses2] = useState(false);

  const [courseL3, setCourseL3] = useState(courseList1);
  const handleCourseBoxes2 = () => {
    setCourseL3([...courseL3, ...courseList1]);
    // setCourseL3((prevCourseL3) => [...prevCourseL3, ...courseList1]); // using prevState, motmaen tar.
  };

  const [courseL4, setCourseL4] = useState(courseList1);
  const handleDelete = (idd) => {
    setCourseL4(courseL4.filter((i) => i.id !== idd));
  };

  return (
    <div>
      {/* ----------> list <---------- */}
      <h2>Footer Section 3:</h2>
      {data1} <br />
      {data1.map((i) => (
        <span key={i.id}>{i}</span>
      ))}
      {data2}
      <hr />
      {/* ---------------- */}
      <div className="CBoxs">
        {courseList1.map((i) => (
          <CourseBox key={i.id} title={i.title} description={i.description} />
        ))}
      </div>
      <hr />
      {/* data-in-state */}
      <button onClick={handleCourseBoxes}>click to show courses</button>
      <div className="CBoxs">
        {courseL2.map((i, index) => (
          <CourseBox key={index} title={i.title} description={i.description} />
        ))}
      </div>
      <hr />
      {/* css(display-show-none) */}
      <button onClick={() => setShowCourses(!showCourses)}>
        {showCourses ? "Hide" : "Show"} Courses
      </button>
      <div className="CBoxs" style={{ display: showCourses ? "flex" : "none" }}>
        {courseList1.map((i) => (
          <CourseBox key={i.id} title={i.title} description={i.description} />
        ))}
      </div>
      <hr />
      {/* conditional-rendering */}
      <button onClick={() => setShowCourses2((prev) => !prev)}>
        {showCourses2 ? "Hide" : "Show"} Courses
      </button>
      {showCourses2 && (
        <div className="CBoxs">
          {courseList1.map((i) => (
            <CourseBox key={i.id} title={i.title} description={i.description} />
          ))}
        </div>
      )}
      <hr />
      {/* ---------------- */}
      <button onClick={handleCourseBoxes2}>click to load more courses</button>
      <div className="CBoxs">
        {courseL3.map((i) => (
          <CourseBox key={i.id} title={i.title} description={i.description} />
        ))}
      </div>
      <hr />
      {/* ---------------- */}
      <div className="CBoxs">
        {courseL4.map((i) => (
          <CourseBox key={i.id} title={i.title} description={i.description}>
            <button onClick={() => handleDelete(i.id)}>delete</button>
          </CourseBox>
        ))}
      </div>
      <hr className="hr1" />
    </div>
  );
}

export default Footer3;
