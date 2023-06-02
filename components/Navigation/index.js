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
        backgroundColor: "#ffffff",
        padding: "10px",
      }}
    >
      <Link href={"/"}>Spotlight</Link>
      <Link href={"/art-pieces"}>Art Pieces</Link>
    </div>
  );
}
