import { render, screen } from "@testing-library/react";
import ArtPiecePreview from ".";

test("renders the image and information correctly", () => {
  const mockPiece = [
    {
      artist: "Steve Johnson",
      name: "Orange Red and Green Abstract Painting",
      imageSource:
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
      dimensions: { height: 2432, width: 1920 },
    },
  ];

  render(<ArtPiecePreview {...mockPiece[0]} />);
  mockPiece.forEach((piece) => {
    const image = screen.getByAltText(piece.name);
    expect(image).toBeInTheDocument();
    const expectedSrc = new RegExp(
      `/_next/image\\?url=${encodeURIComponent(piece.imageSource)}&w=\\d+&q=75`
    );
    expect(image.getAttribute("src")).toMatch(expectedSrc);

    expect(image).toHaveAttribute("width", String(piece.dimensions.width * 0.1));
    expect(image).toHaveAttribute("height", String(piece.dimensions.height * 0.1));

    const text = screen.getByText(`${piece.name} by ${piece.artist}`);
    expect(text).toBeInTheDocument();
  });
});
