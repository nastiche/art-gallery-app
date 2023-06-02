import ArtPieceDetails from "@/components/ArtPieceDetails";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);
  const artPiece = data.find((artpiece) => artpiece.slug === slug);

  if (!artPiece) {
    return null;
  }

  return (
    <>
      <Link href="/art-pieces">Back</Link>
      <ArtPieceDetails {...artPiece} />;
    </>
  );
}
