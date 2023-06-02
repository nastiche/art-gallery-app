import { render, screen } from "@testing-library/react";
import Navigation from ".";

test("renders navigation links with correct href and text content", () => {
  render(<Navigation />);

  const spotlightLink = screen.getByText("Spotlight");
  expect(spotlightLink).toBeInTheDocument();
  expect(spotlightLink.tagName).toBe("A");
  expect(spotlightLink.getAttribute("href")).toBe("/");

  const artPieceLink = screen.getByText("Art Piece");
  expect(artPieceLink).toBeInTheDocument();
  expect(artPieceLink.tagName).toBe("A");
  expect(artPieceLink.getAttribute("href")).toBe("/art-pieces");
});
