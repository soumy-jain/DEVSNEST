import { createContext } from "react";

export interface ThemeContextType {
  theme: boolean;
  setTheme: (theme: boolean) => void;
}

const initialState: ThemeContextType = {
  theme: false,
  setTheme: (theme: boolean) => {},
};
const Context = createContext<ThemeContextType>(initialState);

export default Context;
