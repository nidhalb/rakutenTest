import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import to extend Jest matchers
import Home from "../pages/Home";
import products from "../data/products.json"; // Import the JSON file

// Mock the ProductCard component
jest.mock("../components/ProductCard/ProductCard", () => (props: { title: string }) => (
  <div data-testid="product-card">{props.title}</div>
));

describe("Home Component", () => {
  // Test 1: Renders the title correctly
  it("renders the title", () => {
    render(<Home />);
    const titleElement = screen.getByText("Welcome to Our Product List!");
    expect(titleElement).toBeInTheDocument();
  });

  // Test 2: Renders valid products
  it("renders valid products", () => {
    render(<Home />);

    // Check if all valid products are rendered
    products
      .filter(
        (product) =>
          product.image && product.title && product.newPrice && product.brand && product.href
      )
      .forEach((product) => {
        const productElements = screen.getAllByText(product.title);
        expect(productElements.length).toBeGreaterThan(0); // Ensure at least one element is found
      });
  });

  // Test 3: Displays a message when no valid products are available
  it("displays a message when no valid products are available", () => {
    // Mock the products.json file to return an empty array
    jest.mock("../data/products.json", () => []);
    console.log()

    render(<Home />);
    const messageElement = screen.getByText("No valid products to display.");
    expect(messageElement).toBeInTheDocument();
  });

  // Test 4: Does not render invalid products
  it("does not render invalid products", () => {
    render(<Home />);

    // Check if invalid products are not rendered
    products
      .filter(
        (product) =>
          !product.image || !product.title || !product.newPrice || !product.brand || !product.href
      )
      .forEach((product) => {
        const productElement = screen.queryByText(product.title);
        expect(productElement).not.toBeInTheDocument();
      });
  });
});