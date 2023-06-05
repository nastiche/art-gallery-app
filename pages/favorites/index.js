import ArtPieces from "@/components/ArtPieces";
import { useEffect, useState } from "react";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [favoritePieces, setFavoritePieces] = useState([]);

  useEffect(() => {
    if (artPiecesInfo && pieces) {
      const filteredPieces = pieces.filter((piece) =>
        artPiecesInfo.some((pieceInfo) => pieceInfo.slug === piece.slug)
      );
      setFavoritePieces(filteredPieces);
    }
  }, [artPiecesInfo, pieces]);

  if (!pieces) return <div>...loading</div>;

  return (
    <ArtPieces
      pieces={favoritePieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
