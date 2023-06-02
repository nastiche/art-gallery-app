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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Image
            src={imageSource}
            alt={name}
            width={dimensions.width * 0.1}
            height={dimensions.height * 0.1}
          />
          <p style={{ margin: "0" }}>{`"${name}"`}</p>
          <p style={{ margin: "0" }}>by {artist}</p>
          <p style={{ margin: "0" }}>{`${year} (${genre})`}</p>
          <Link href="/art-pieces" style={{ margin: "20px" }}>
            Back
          </Link>
        </div>
      </li>
    </ul>
  );
}
