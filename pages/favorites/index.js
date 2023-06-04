import ArtPieces from "@/components/ArtPieces";
import { useEffect, useState } from "react";

export default function Favorites({ pieces, onToggleFavorite }) {
  const [favoritePieces, setFavoritePieces] = useState([]);
  useEffect(() => {
    if (pieces && pieces.length > 0)
      setFavoritePieces(pieces.filter((piece) => piece.isFavorite === true));
  }, [pieces]);
  // console.log(favoritePieces);
  if (!favoritePieces) return <div>...loading</div>;
  return (
    <ArtPieces pieces={favoritePieces} onToggleFavorite={onToggleFavorite} />
  );
}
