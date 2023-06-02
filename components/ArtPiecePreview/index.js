import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({
  imageSource,
  name,
  artist,
  dimensions,
  slug,
}) {
  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={imageSource}
          alt={name}
          width={dimensions.width * 0.1}
          height={dimensions.height * 0.1}
        />
      </Link>
      <p>
        {name} by {artist}
      </p>
    </>
  );
}
