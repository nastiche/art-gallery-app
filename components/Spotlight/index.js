import Image from "next/image";

export default function Spotlight({ imageSource, artist, name, dimensions }) {
  return (
    <>
      <Image
        src={imageSource}
        alt={name}
        width={dimensions.width * 0.1}
        height={dimensions.height * 0.1}
      />
      <p>
        {name} by {artist}
      </p>
    </>
  );
}
