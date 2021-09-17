import { useContext } from "react";
import Context from "../Context";
import { ThemeContextType } from "../Context";

const Toggle = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(Context);

  return (
    <button
      className={theme ? "theme-btn dark" : "theme-btn"}
      onClick={() => setTheme(!theme)}
    >
      {theme ? "Light" : "Dark"}
    </button>
  );
};

export default Toggle;
