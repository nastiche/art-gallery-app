import Image from "next/image";

export default function Spotlight({ imageSource, artist, name, dimensions }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        margin: "10px",
      }}
    >
      <Image
        src={imageSource}
        alt={name}
        width={dimensions.width * 0.1}
        height={dimensions.height * 0.1}
      />
      <p style={{ margin: 0 }}>{name}</p>
      <p style={{ margin: 0 }}>by {artist}</p>
    </div>
  );
}
