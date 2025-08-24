// // Normal:
// function CourseBox1(props) {
//   return (
//     <div className="CBox">
//       <h2>course title: {props.title}</h2>
//       <p>course datail: {props.detail}</p>
//       <span>time of course: {props.time} </span>
//     </div>
//   );
// }

// Destructuring (behtarin ravesh):
function CourseBox1({ title, detail = "default details", time: ti }) {
  return (
    <div className="CBox CBox1">
      <span>CourseBox-1</span>
      <h2>course title: {title}</h2>
      <p>course datail: {detail}</p>
      <span>time of course: {ti} </span>
    </div>
  );
}

export default CourseBox1;
