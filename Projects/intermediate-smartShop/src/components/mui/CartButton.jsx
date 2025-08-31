import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export default function CartButton() {
  const cartItems = 5;

  return (
    <IconButton color="inherit">
      <Badge badgeContent={cartItems} color="error">
        <ShoppingCartIcon sx={{ fontSize: 30 }} />
      </Badge>
    </IconButton>
  );
}
