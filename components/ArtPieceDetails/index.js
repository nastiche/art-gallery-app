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
  colors,
  onToggleFavorite,
  onSubmitComment,
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
        <Image
          src="/back.png"
          alt="go to the previous page"
          width="50"
          height="50"
        />
      </Link>
      <div
        style={{
          border: "solid 10px black",
          padding: "4px 4px 0",
        }}
      >
        <Image
          src={imageSource}
          alt={name}
          width={dimensions.width * 0.1}
          height={dimensions.height * 0.1}
        />
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
      </div>
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
        {colors.map((color, index) => (
          <div
            style={{
              backgroundColor: color,
              width: "30px",
              height: "30px",
              marginBottom: "10px",
            }}
            key={index}
          ></div>
        ))}
      </div>
      <Comments
        comments={
          artPiecesInfo.find(
            (pieceInfo) => pieceInfo.slug === slug && pieceInfo.comments
          )
            ? artPiecesInfo.find((pieceInfo) => pieceInfo.slug === slug)
                .comments
            : []
        }
      />
      <div style={{ marginTop: "auto", marginBottom: "70px" }}>
        <CommentForm onSubmitComment={onSubmitComment} slug={slug} />
      </div>
    </div>
  );
}
