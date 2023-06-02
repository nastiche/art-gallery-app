import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece, index) => (
        <li key={index}>
          <ArtPiecePreview {...piece} />
        </li>
      ))}
    </ul>
  );
}
