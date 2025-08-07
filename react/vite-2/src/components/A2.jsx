export default function A2() {
  let hasDiscount = true;

  return (
    <div>
      <h2>welcome to our site</h2>
      {hasDiscount && <h4>you have discount</h4>}
      {hasDiscount ? <h4>you have discount</h4> : ""}
      {/* baraye halati ke else nadarim, faghat if darim */}
      <hr className="hr1" />
    </div>
  );
}
