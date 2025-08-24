import CourseBox1 from "./CourseBox1";
import CourseBox2 from "./CourseBox2";
import CourseBox3 from "./CourseBox3";
import CourseBox4 from "./CourseBox4";

function Main() {
  let courseThree = {
    title: "react course",
    detail: "detailllll react",
    time: "1:10",
  };

  return (
    <div>
      <h2>Main Section:</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        blanditiis, odio eaque repellendus autem commodi facilis odit? Ipsum nam
        vitae maiores recusandae dolorum, tempore esse aperiam minus accusantium
        dolore tempora!
      </p>

      <div className="CBoxs">
        {/* ----------> CourseBox-1 <---------- */}
        <CourseBox1 title="css course" detail="detaillllll css" time="2:35" />
        <CourseBox1 title={courseThree.title} time={courseThree.time} />
        <CourseBox1 {...courseThree} />

        {/* ----------> CourseBox-2 <---------- */}
        <CourseBox2 course={{ title: "css course", time: "1:10" }} />
        <CourseBox2 course={courseThree} />
        <CourseBox2 course={courseThree} />

        {/* ----------> CourseBox-3 <---------- */}
        <CourseBox3>
          <span>CourseBox-3</span>
          <h2>course title: react</h2>
          <p>course datail: detailllll react</p>
          <span>time of course: 1:10</span>
        </CourseBox3>

        <CourseBox3>
          <span>CourseBox-3</span>
          <h2>React Course</h2>
          <img src="react.png" alt="react logo" />
          <p>Learn React with projects</p>
        </CourseBox3>

        <CourseBox3>
          <span>CourseBox-3</span>
          <h2>React Course</h2>
          <p>Learn React with projects</p>
        </CourseBox3>

        {/* ----------> CourseBox-4 <---------- */}
        <CourseBox4 title="React">
          <p>Learn React step by step.</p>
          <button>Start</button>
        </CourseBox4>

        <CourseBox4 title="JavaScript">
          <ul>
            <li>Variables</li>
            <li>Functions</li>
            <li>DOM</li>
          </ul>
        </CourseBox4>

        <CourseBox4 title="css">
          <img src="css.png" alt="css logo" />
        </CourseBox4>
      </div>
      <hr className="hr1" />
    </div>
  );
}

export default Main;
