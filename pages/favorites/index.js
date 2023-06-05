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
      const filteredPieces = pieces.filter((piece) => {
        const pieceInfo = artPiecesInfo.find(
          (info) => info.slug === piece.slug
        );
        return pieceInfo && pieceInfo.isFavorite;
      });
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
