import ArtPieceDetails from "@/components/ArtPieceDetails";

import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);
  const piece = pieces.find((piece) => piece.slug === slug);

  if (!piece) {
    return null;
  }

  return (
    <>
      <ArtPieceDetails {...piece} />
    </>
  );
}
