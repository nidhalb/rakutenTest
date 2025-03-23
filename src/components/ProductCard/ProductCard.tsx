import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Product } from "./ProductCard.types";

function ProductCard({ image, title, newPrice, usedPrice, brand, href }: Product) {
  return (
    <Card sx={{ 
      width: 343, 
      height: "auto", 
      boxShadow: 3, 
      display: "flex", 
      flexDirection: "column", 
      transition: "transform 0.3s ease-in-out",
      paddingTop: "16px", 
      paddingBottom: "16px" 
    }}>
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <Box sx={{ display: "flex", width: "100%", height: "120px", alignItems: "center" }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{ width: "120px", height: "120px", objectFit: "contain" }}
          />
          <CardContent sx={{ flex: 1,height:"100%" }}>
            <Typography variant="body2" sx={{ color: "#696969", fontSize: "12px" }}>
              {brand}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px", color: "#333", fontSize: "14px" }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#BF0000", fontWeight: "bold", fontSize: "20px" }}>
              {newPrice} <span style={{ fontSize: "14px", fontWeight: "normal" }}>Neuf</span>
            </Typography>
            {usedPrice && (
              <Typography variant="body2" sx={{ color: "#333", fontSize: "20px", fontWeight: "bold" }}>
                <span style={{ fontSize: "14px", fontWeight: "normal" }}>Occasion dès</span> {usedPrice}
              </Typography>
            )}
          </CardContent>
        </Box>
      </a>
    </Card>
  );
}

export default ProductCard;