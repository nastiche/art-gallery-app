import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "../FavoriteButton";
import CommentForm from "../CommentForm";
import Comments from "../Comments";

export default function ArtPieceDetails({
  imageSource,
  name,
  artist,
  year,
  genre,
  dimensions,
  slug,
  comments,
  colors,
  isFavorite,
  onToggleFavorite,
  onSubmitComment,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        position: "relative",
        margin: "20px 0",
        height: "100vh",
      }}
    >
      <Link
        href="/art-pieces"
        style={{
          display: "block",
          fontSize: "40px",
          textDecoration: "none",
          position: "absolute",
          left: "10px",
        }}
      >
        🔙{" "}
      </Link>
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

      <p style={{ marginTop: "3.3px", marginBottom: "0px" }}>{`"${name}"`}</p>
      <p style={{ margin: "0" }}>by {artist}</p>
      <p style={{ margin: "0" }}>{`${year} (${genre})`}</p>
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: "20px",
          top: "0px",
          flexDirection: "column",
        }}
      >
        {colors.map((color) => (
          <div
            style={{
              backgroundColor: color,
              width: "30px",
              height: "30px",
              marginBottom: "10px",
            }}
          ></div>
        ))}
      </div>
      <Comments comments={comments} slug={slug} />
      <div style={{ marginTop: "auto", marginBottom: "70px" }}>
        <CommentForm onSubmitComment={onSubmitComment} slug={slug} />
      </div>
    </div>
  );
}
