import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "../FavoriteButton";

export default function ArtPieceDetails({
  imageSource,
  name,
  artist,
  year,
  genre,
  dimensions,
  isFavorite,
  onToggleFavorite,
  slug,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        position: "relative",
      }}
    >
      <Image
        src={imageSource}
        alt={name}
        width={dimensions.width * 0.1}
        height={dimensions.height * 0.1}
      />
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
      <p style={{ margin: "0" }}>{`"${name}"`}</p>
      <p style={{ margin: "0" }}>by {artist}</p>
      <p style={{ margin: "0" }}>{`${year} (${genre})`}</p>
      <Link href="/art-pieces" style={{ margin: "20px" }}>
        Back
      </Link>
    </div>
  );
}
