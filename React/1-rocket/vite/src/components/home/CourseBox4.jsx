// props & children:
function Box({ title, children }) {
  return (
    <div className="CBox CBox4">
      {/* ----------> Structural sharing <---------- */}
      <span>CourseBox-4</span>
      <h2>course title: {title}</h2>

      {/* ----------> Flexibility in content <---------- */}
      <div>{children}</div>
    </div>
  );
}

export default Box;
