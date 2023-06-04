import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useImmerLocalStorageState } from "@/public/useImmerLocalStorageState";

const URL = `https://example-apis.vercel.app/api/art`;

const fetcher = (URL) => fetch(URL).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(URL, fetcher);
  const isLoading = !data && !error;

  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  useEffect(() => {
    const storedData = localStorage.getItem("art-pieces-info");
    if (storedData && storedData !== "[]") {
      const parsedData = JSON.parse(storedData);
      updateArtPiecesInfo(parsedData);
    } else if (data) {
      const updatedPieces = data.map((piece) => ({
        ...piece,
        isFavorite: false,
        comments: [],
      }));

      updateArtPiecesInfo(updatedPieces);
    }
  }, [data]);



  function handleToggleFavorite(pieceSlug) {
    updateArtPiecesInfo((prevArtPiecesInfo) =>
      prevArtPiecesInfo.map((piece) =>
        piece.slug === pieceSlug
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece
      )
    );
    setTimeout(() => {
      localStorage.setItem("art-pieces-info", JSON.stringify(artPiecesInfo));
    }, 0);
  }
  function handleSubmitComment(event, slug) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    const commentDisplay = `"${data.comment}", (${date})`;

    updateArtPiecesInfo((prevArtPiecesInfo) =>
      prevArtPiecesInfo.map((piece) =>
        piece.slug === slug
          ? { ...piece, comments: piece.comments.concat(commentDisplay) }
          : piece
      )
    );

    updateArtPiecesInfo((updatedArtPiecesInfo) => {
      localStorage.setItem(
        "art-pieces-info",
        JSON.stringify(updatedArtPiecesInfo)
      );
      return updatedArtPiecesInfo;
    });

    event.target.reset();
    event.target.focus();
  }

  // useEffect(() => {
  //   console.log(artPiecesInfo);
  // }, [artPiecesInfo]);

  if (error) {
    return <div>ERROR: failed to load.</div>;
  }

  if (isLoading) {
    return <div>...loading</div>;
  }

  return (
    <>
      <GlobalStyle />
      {artPiecesInfo && artPiecesInfo.length > 0 ? (
        <Component
          {...pageProps}
          pieces={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
          onSubmitComment={handleSubmitComment}
        />
      ) : (
        <></>
      )}

      <Layout />
    </>
  );
}
