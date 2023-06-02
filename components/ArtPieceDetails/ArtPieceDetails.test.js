import { render, screen } from "@testing-library/react";
import ArtPieceDetails from ".";

const testData = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: { height: 2432, width: 1920, type: "jpg" },
  },
  // Add more test data here if needed
];

test("renders the art piece details correctly", () => {
  const artPiece = testData[0]; // Use the first item in the test data
  render(
    <ArtPieceDetails
      imageSource={artPiece.imageSource}
      name={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      dimensions={artPiece.dimensions}
    />
  );

  const image = screen.getByAltText(artPiece.name);
  expect(image).toBeInTheDocument();

  const expectedSrc = new RegExp(
    `/_next/image\\?url=${encodeURIComponent(artPiece.imageSource)}&w=\\d+&q=75`
  );
  expect(image.getAttribute("src")).toMatch(expectedSrc);

  expect(image).toHaveAttribute(
    "width",
    String(artPiece.dimensions.width * 0.1)
  );
  expect(image).toHaveAttribute(
    "height",
    String(artPiece.dimensions.height * 0.1)
  );

  const detailsText = screen.getByText(
    `${artPiece.artist}: ${artPiece.name} (${artPiece.genre},${artPiece.year})`
  );
  expect(detailsText).toBeInTheDocument();
});
