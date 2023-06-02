import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

const URL = `https://example-apis.vercel.app/api/art`;

const fetcher = (URL) => fetch(URL).then((response) => response.json());

export default function HomePage() {
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <div>ERROR: failed to load.</div>;
  if (!data) return <div>...loading</div>;

  return <ArtPieces pieces={data} />;
}
