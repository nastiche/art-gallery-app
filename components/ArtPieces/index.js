import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={`${piece.slug}${piece.name}`}>
          <ArtPiecePreview {...piece} />
        </li>
      ))}
    </ul>
  );
}
