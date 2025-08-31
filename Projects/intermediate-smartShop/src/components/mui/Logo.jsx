import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StorefrontIcon from "@mui/icons-material/Storefront";

export default function Logo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <StorefrontIcon sx={{ fontSize: 36, color: "primary.main", mr: 1 }} />
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: "bold",
          display: { xs: "none", sm: "block" },
        }}
      >
        SmartShop
      </Typography>
    </Box>
  );
}
