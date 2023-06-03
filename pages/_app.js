import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";

const URL = `https://example-apis.vercel.app/api/art`;

const fetcher = (URL) => fetch(URL).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(URL, fetcher);
  const isLoading = !data && !error;

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  useEffect(() => {
    if (data) {
      const updatedPieces = data.map((piece) => ({
        ...piece,
        isFavorite: false,
      }));

      setArtPiecesInfo(updatedPieces);
    }
  }, [data]);

  function handleToggleFavorite(pieceSlug) {
    setArtPiecesInfo((prevArtPiecesInfo) =>
      prevArtPiecesInfo.map((piece) =>
        piece.slug === pieceSlug
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece
      )
    );
  }

  useEffect(() => {
    console.log(artPiecesInfo);
  }, [artPiecesInfo]);

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
        />
      ) : (
        <></>
      )}

      <Layout />
    </>
  );
}
