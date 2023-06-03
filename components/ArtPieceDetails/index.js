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
    <ul>
      <li>
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
          <p
            style={{ marginTop: "3.3px", marginBottom: "0px" }}
          >{`"${name}"`}</p>
          <p style={{ margin: "0" }}>by {artist}</p>
          <p style={{ margin: "0" }}>{`${year} (${genre})`}</p>
          <Link
            href="/art-pieces"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "30px",
              border: "solid 1px black",
              borderRadius: "5px",
              backgroundColor: "black",
              width: "80px",
              height: "30px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Back
          </Link>
        </div>
      </li>
    </ul>
  );
}
