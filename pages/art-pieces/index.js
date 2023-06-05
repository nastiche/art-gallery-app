import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ pieces, artPiecesInfo, onToggleFavorite }) {
  if (!pieces) return <div>...loading</div>;

  return <ArtPieces artPiecesInfo={artPiecesInfo} pieces={pieces} onToggleFavorite={onToggleFavorite} />;
}
