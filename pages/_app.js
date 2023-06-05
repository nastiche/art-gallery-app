import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
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

  function handleToggleFavorite(pieceSlug) {
    updateArtPiecesInfo((prevArtPiecesInfo) => {
      const pieceIndex = prevArtPiecesInfo.findIndex(
        (pieceInfo) => pieceInfo.slug === pieceSlug
      );

      if (pieceIndex !== -1) {
        const pieceInfo = prevArtPiecesInfo[pieceIndex];
        if (pieceInfo.hasOwnProperty("isFavorite")) {
          return prevArtPiecesInfo.map((piece, index) =>
            index === pieceIndex
              ? { ...piece, isFavorite: !piece.isFavorite }
              : piece
          );
        } else {
          return prevArtPiecesInfo.map((piece, index) =>
            index === pieceIndex ? { ...piece, isFavorite: true } : piece
          );
        }
      }

      return [
        ...prevArtPiecesInfo,
        { slug: pieceSlug, isFavorite: true, comments: [] },
      ];
    });
  }

  function handleSubmitComment(event, pieceSlug) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputData = Object.fromEntries(formData);
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    const commentDisplay = `"${inputData.comment}", (${date})`;
    updateArtPiecesInfo((prevArtPiecesInfo) => {
      const pieceInfo = prevArtPiecesInfo.find(
        (pieceInfo) => pieceInfo.slug === pieceSlug && pieceInfo.comments
      );

      if (pieceInfo && pieceInfo.hasOwnProperty("comments")) {
        return artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === pieceSlug
            ? {
                ...pieceInfo,
                comments: pieceInfo.comments.concat(commentDisplay),
              }
            : pieceInfo
        );
      }

      return [
        ...artPiecesInfo,
        { slug: pieceSlug, comments: [commentDisplay], isFavorite: false },
      ];
    });
    event.target.reset();
    event.target.focus();
  }

  // useEffect(() => {
  //   console.log(data, artPiecesInfo);
  // }, [data]);

  if (error) {
    return <div>ERROR: failed to load.</div>;
  }

  if (isLoading) {
    return <div>...loading</div>;
  }

  return (
    // <SWRConfig value={{ fetcher, refreshInterval: 1000 }}>
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
        onSubmitComment={handleSubmitComment}
      />

      <Layout />
    </>
  );
}
