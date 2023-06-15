import { Logo } from "./icons";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full py-4 px-3 lg:py-4 lg:px-28 bg-purple-light">
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
};
