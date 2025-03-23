import { Box, Typography, Grid } from "@mui/material"; // Import MUI components
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../data/products.json"; // Import the JSON file
import { red } from "@mui/material/colors";

function Home() {
  // Filter out products with missing or invalid data
  const validProducts = products.filter(product => {
    return (
      product.image &&
      product.title &&
      product.newPrice &&
      product.brand &&
      product.href
    );
  });

  return (
    <Box sx={{ padding: 3 }}>
      {/* Title */}
      <Typography variant="h3" component="h1" align="center" sx={{ marginBottom: 4 }}>
        Welcome to Our Product List!
      </Typography>

      {/* Product Grid */}
      {validProducts.length > 0 ? (
        <Grid container spacing={3} justifyContent="center">
          {validProducts.map((product, index) => (
            <Grid item key={index}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" align="center" sx={{ color: red }}>
          No valid products to display.
        </Typography>
      )}
    </Box>
  );
}

export default Home;