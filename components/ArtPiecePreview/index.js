import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({
  imageSource,
  name,
  artist,
  dimensions,
  slug,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <Link href={`/art-pieces/${slug}`}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={imageSource}
            alt={name}
            width={dimensions.width * 0.1}
            height={dimensions.height * 0.1}
          />
        </div>
      </Link>
      <p style={{ margin: 0 }}>{`"${name}"`}</p>
      <p style={{ margin: 0 }}>by {artist}</p>
    </div>
  );
}
