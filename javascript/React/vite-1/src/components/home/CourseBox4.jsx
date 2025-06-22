// props & children:
function Box({ title, children }) {
  return (
    <div className="CBox CBox4">
      {/* اشتراک ساختاری */}
      <span>CourseBox-4</span>
      <h2>course title: {title}</h2>

      {/* انعطاف در محتوا */}
      <div>{children}</div>
    </div>
  );
}

export default Box;
