import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "../FavoriteButton";

export default function ArtPiecePreview({
  imageSource,
  name,
  artist,
  dimensions,

  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        position: "relative",
        marginTop: "20px",
      }}
    >
      <Link
        style={{ margin: "0", display: "block", height: "100%" }}
        href={`/art-pieces/${slug}`}
      >
        <Image
          src={imageSource}
          alt={name}
          width={dimensions.width * 0.1}
          height={dimensions.height * 0.1}
        />
      </Link>
      <FavoriteButton
        isFavorite={
          artPiecesInfo.find((pieceInfo) => pieceInfo.slug === slug)
            ? artPiecesInfo.find((pieceInfo) => pieceInfo.slug === slug)
                .isFavorite
            : false
        }
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />

      <p style={{ margin: 0 }}>{`"${name}"`}</p>
      <p style={{ margin: 0 }}>by {artist}</p>
    </div>
  );
}
