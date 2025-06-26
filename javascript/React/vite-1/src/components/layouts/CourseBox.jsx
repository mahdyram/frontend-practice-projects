function CourseBox({ title, description = "defualt des", children }) {
  return (
    <div className="CBox CBox3">
      <h3>{title}</h3>
      <p>{description}</p>
      <div>{children}</div>
    </div>
  );
}

export default CourseBox;
