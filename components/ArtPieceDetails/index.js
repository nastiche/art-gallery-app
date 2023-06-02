import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({
  imageSource,
  name,
  artist,
  year,
  genre,
  dimensions,
}) {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <Link href="/art-pieces" style={{ marginBottom: "10px" }}>
        Back
      </Link>
      <Image
        src={imageSource}
        alt={name}
        width={dimensions.width * 0.1}
        height={dimensions.height * 0.1}
      />
      <p style={{ margin: "3px" }}>{`${artist}: "${name}",`}</p>
      <p style={{ margin: "3px" }}>{`${year} (${genre})`}</p>
    </div>
  );
}
