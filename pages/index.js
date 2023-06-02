import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

const URL = `https://example-apis.vercel.app/api/art`;

const fetcher = (URL) => fetch(URL).then((response) => response.json());

export default function HomePage() {
  const { data, error } = useSWR(URL, fetcher);
  function getRandomPiece(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  if (error) return <div>ERROR: failed to load.</div>;
  if (!data) return <div>...loading</div>;

  const randomPiece = getRandomPiece(data);

  return (
    <>
      <Spotlight {...randomPiece} />
      <ArtPieces pieces={data} />
    </>
  );
}
