import CartButton from "./mui/CartButton";
import Logo from "./mui/Logo";
import SearchBar from "./mui/SearchBar";

export default function Header() {
  return (
    <header>
      <Logo />
      <SearchBar />
      <CartButton />
    </header>
  );
}
