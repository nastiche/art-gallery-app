import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ pieces, onToggleFavorite }) {
  if (!pieces) return <div>...loading</div>;

  return <ArtPieces pieces={pieces} onToggleFavorite={onToggleFavorite} />;
}
