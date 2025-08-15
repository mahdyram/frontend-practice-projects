// // Normal:
// function CourseBox2({ course }) {
//   return (
//     <div className="CBox2">
//       <span>CourseBox-2</span>
//       <h2>course title: {course.title}</h2>
//       <p>course datail: {course.detail}</p>
//       <span>time of course: {course.time} </span>
//     </div>
//   );
// }

// Destructuring:
function CourseBox2({ course: { title, detail = "default details", time } }) {
  return (
    <div className="CBox CBox2">
      <span>CourseBox-2</span>
      <h2>course title: {title}</h2>
      <p>course datail: {detail}</p>
      <span>time of course: {time} </span>
    </div>
  );
}

export default CourseBox2;
