import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

// const URL = `https://example-apis.vercel.app/api/art`;

// const fetcher = (URL) => fetch(URL).then((response) => response.json());

export default function SportlightPage({ data }) {
  function getRandomPiece(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomPiece = getRandomPiece(data);

  return (
    <>
      <Spotlight {...randomPiece} />
    </>
  );
}
