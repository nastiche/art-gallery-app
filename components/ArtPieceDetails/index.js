import Image from "next/image";

export default function ArtPieceDetails({
  imageSource,
  name,
  artist,
  year,
  genre,
  dimensions,
}) {
  return (
    <>
      <Image
        src={imageSource}
        alt={name}
        width={dimensions.width * 0.1}
        height={dimensions.height * 0.1}
      />
      <p>
        {artist}: {name} ({genre},{year})
      </p>
    </>
  );
}
