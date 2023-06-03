import Spotlight from "@/components/Spotlight";
import { useEffect, useState } from "react";

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

export default function SpotlightPage({ pieces, onToggleFavorite }) {
  const [randomIndex, setRandomIndex] = useState(-1);
  const [indexLoaded, setIndexLoaded] = useState(false);

  useEffect(() => {
    setRandomIndex(getRandomIndex(pieces));
    setIndexLoaded(true);
    // console.log(pieceLoaded);
  }, []);

  function onRandomPiece() {
    setRandomIndex(getRandomIndex(pieces));
  }

  if (!indexLoaded) return <div>...loading</div>;
  return (
    <>
      <Spotlight
        randomIndex={randomIndex}
        pieces={pieces}
        onToggleFavorite={onToggleFavorite}
        onRandomPiece={onRandomPiece}
      />
    </>
  );
}
