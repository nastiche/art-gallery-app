export function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <button
      style={{
        position: "absolute",
        top: "40px",
        right: "80px",
        transform: "translate(-50%, -50%)",
        backgroundColor: "transparent",
        border: "none",
      }}
      onClick={() => {
        onToggleFavorite(slug);
      }}
    >
      {isFavorite ? (
        <img
          src="/heart-filled.svg"
          alt="favorite-icon"
          width="50"
          height="50"
        />
      ) : (
        <img
          src="/heart-empty.svg"
          alt="favorite-icon"
          width="50"
          height="50"
        />
      )}
    </button>
  );
}
