import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={`${piece.slug}${piece.name}`} style={{ marginBottom: "10px" }}>
          <ArtPiecePreview {...piece} onToggleFavorite={onToggleFavorite} />
        </li>
      ))}
    </ul>
  );
}
