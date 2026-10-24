function Post({ title, body }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px 0",
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Post;