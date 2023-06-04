export default function Comments({ comments, slug }) {
  return (
    <div style={{ width: "300px", marginTop: "40px" }}>
      <p style={{ margin: "0", marginBottom: "5px" }}>Comments:</p>
      {comments.map((comment) => (
        <p key={slug} style={{ margin: "0", marginBottom: "5px" }}>
          {comment}
        </p>
      ))}
    </div>
  );
}
