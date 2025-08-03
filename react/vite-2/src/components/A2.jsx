export default function A2() {
  let hasDiscount = true;

  return (
    <div>
      <h2>welcome to our site</h2>
      {hasDiscount && <h3>you have discount</h3>}
      {hasDiscount ? <h3>you have discount</h3> : ""}
      {/* baraye halati ke else nadarim, faghat if darim */}
      <hr className="hr1" />
    </div>
  );
}
