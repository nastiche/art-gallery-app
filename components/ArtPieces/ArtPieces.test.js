import { render, screen } from "@testing-library/react";
import ArtPieces from "../ArtPieces";

// Mock data for testing
const mockPieces = [
  {
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    dimensions: { height: 2432, width: 1920 },
  },
  {
    artist: "Emma Thompson",
    name: "Blue Sky Landscape",
    imageSource:
      "https://example-apis.vercel.app/assets/art/blue-sky-landscape.jpg",
    dimensions: { height: 1600, width: 2560 },
  },
];

test("renders the list of art pieces correctly", () => {
  render(<ArtPieces pieces={mockPieces} />);

  // Verify that the correct number of ArtPiecePreview components are rendered
  const artPiecePreviews = screen.getAllByRole("listitem");
  expect(artPiecePreviews).toHaveLength(mockPieces.length);

  // Verify the content of each ArtPiecePreview component
  mockPieces.forEach((piece, index) => {
    const artPiecePreview = artPiecePreviews[index];

    // Verify the image source and alt text
    const image = artPiecePreview.querySelector("img");
    expect(image).toBeInTheDocument();

    // Create a RegExp pattern to match the expected image source substring

    const expectedImageSourcePattern = new RegExp(
      `/_next/image\\?url=${encodeURIComponent(piece.imageSource)}&w=\\d+&q=75`
    );
    expect(image.getAttribute("src")).toMatch(expectedImageSourcePattern);

    // Verify the dimensions of the image
    const expectedWidth = Math.round(piece.dimensions.width * 0.1);
    const expectedHeight = Math.floor(piece.dimensions.height * 0.1);
    expect(image.getAttribute("width")).toBe(String(expectedWidth));
    expect(Math.floor(image.getAttribute("height"))).toBe(expectedHeight);

    // Verify the text content
    const text = artPiecePreview.querySelector("p");
    expect(text).toHaveTextContent(`${piece.name} by ${piece.artist}`);
  });
});
