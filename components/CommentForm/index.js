export default function CommentForm({ onSubmitComment, slug }) {
  return (
    <form
      onSubmit={(event) => onSubmitComment(event, slug)}
      style={{
        display: "flex",
        margin: "0px",
        gap: "5px",
        width: "300px",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <label htmlFor="formInput">Add comment:</label>
      <input id="formInput" name="comment" row="1" autoFocus></input>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          border: "solid 1px black",
          borderRadius: "5px",
          padding: "7px 14px",
          fontSize: "1rem",
          width: "40%",
          margin: "10px auto",
        }}
      >
        Send
      </button>
    </form>
  );
}
