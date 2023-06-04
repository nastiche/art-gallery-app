import Link from "next/link";

export default function Navigation() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "black",
        padding: "10px",
      }}
    >
      <Link
        style={{
          color: "white",
          textDecoration: "none",
        }}
        href={"/"}
      >
        Spotlight
      </Link>
      <Link
        style={{
          color: "white",
          textDecoration: "none",
        }}
        href={"/art-pieces"}
      >
        Art Pieces
      </Link>
      <Link
        style={{
          color: "white",
          textDecoration: "none",
        }}
        href={"/favorites"}
      >
        Favorites
      </Link>
    </div>
  );
}
