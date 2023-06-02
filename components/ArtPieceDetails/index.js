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
    <ul>
      <li>
        <div style={{ display: "grid", placeItems: "center" }}>
          <Image
            src={imageSource}
            alt={name}
            width={dimensions.width * 0.1}
            height={dimensions.height * 0.1}
          />
          <p style={{ margin: "3px" }}>{`"${name}"`}</p>
          <p style={{ margin: "3px" }}>by {artist}</p>
          <p style={{ margin: "3px" }}>{`${year} (${genre})`}</p>
          <Link href="/art-pieces" style={{ margin: "20px" }}>
            Back
          </Link>
        </div>
      </li>
    </ul>
  );
}
