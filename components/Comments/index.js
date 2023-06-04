export default function Comments({ comments, slug, name }) {
  return (
    <div style={{ width: "300px", marginTop: "40px" }}>
      <p style={{ margin: "0", marginBottom: "5px" }}>Comments:</p>
      {comments.map((comment, index) => (
        <p key={index} style={{ margin: "0", marginBottom: "5px" }}>
          {comment}
        </p>
      ))}
    </div>
  );
}
