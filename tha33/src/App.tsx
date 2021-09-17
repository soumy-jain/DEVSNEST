import React, { useState } from "react";
import "./App.css";
import Context from "./Context";
import Toggle from "./components/Toggle";
import Todos from "./components/Todos";

function App() {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <div className={theme ? "App dark" : "App"}>
      <Context.Provider value={{ theme, setTheme }}>
        <Toggle />
        <Todos />
      </Context.Provider>
    </div>
  );
}

export default App;
