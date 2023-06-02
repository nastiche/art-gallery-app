import { render, screen } from "@testing-library/react";
import Spotlight from "../Spotlight";

// Mock data for testing
const mockSpotlight = {
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  dimensions: { height: 2432, width: 1920 },
};

test("renders the spotlight correctly", () => {
  render(
    <Spotlight
      artist={mockSpotlight.artist}
      name={mockSpotlight.name}
      imageSource={mockSpotlight.imageSource}
      dimensions={mockSpotlight.dimensions}
    />
  );

  // Verify the image source and alt text
  const image = screen.getByAltText(mockSpotlight.name);
  expect(image).toBeInTheDocument();
  const expectedImageSourcePattern = new RegExp(
    `/_next/image\\?url=${encodeURIComponent(
      mockSpotlight.imageSource
    )}&w=\\d+&q=75`
  );

  expect(image.getAttribute("src")).toMatch(expectedImageSourcePattern);
  // Verify the dimensions of the image
  const expectedWidth = Math.round(mockSpotlight.dimensions.width * 0.1);
  const expectedHeight = Math.floor(mockSpotlight.dimensions.height * 0.1);
  expect(image.getAttribute("width")).toBe(String(expectedWidth));
  expect(Math.floor(image.getAttribute("height"))).toBe(expectedHeight);

  // Verify the text content
  const text = screen.getByText(
    `${mockSpotlight.name} by ${mockSpotlight.artist}`
  );
  expect(text).toBeInTheDocument();
});
