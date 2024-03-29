import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FavoriteButton } from "../FavoriteButton";
import Link from "next/link";

export default function Spotlight({
  randomIndex,
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  onRandomPiece,
}) {
  // if (!randomPiece) return <div>...loading</div>;
  // console.log(randomPiece);
  const { imageSource, name, dimensions, artist, slug } = pieces[randomIndex];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 64px)", // Subtract the height of the navigation
        position: "relative",
      }}
    >
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
        <div
          style={{
            border: "solid 10px black",
            padding: "4px 4px 0",
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
        </div>

        <p style={{ marginTop: "3.3px", marginBottom: "0px" }}>{`"${name}"`}</p>
        <p style={{ margin: 0 }}>by {artist}</p>
      </div>
      <button
        style={{
          position: "absolute",
          bottom: "140px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "black",
          color: "white",
          border: "solid 1px black",
          borderRadius: "5px",
          padding: "7px 14px",
          fontSize: "1rem",
        }}
        onClick={() => onRandomPiece()}
      >
        Random picture
      </button>
    </div>
  );
}
