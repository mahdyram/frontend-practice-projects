import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";

export default function ResponsiveGrid() {
  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="space-around"
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid key={index}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
