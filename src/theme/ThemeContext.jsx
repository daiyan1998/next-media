"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useState } from "react";

const DarkModeContext = createContext();

const ThemeContext = (props) => {
  const [darkMode, setDarkMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: darkMode,
    },
  });
  const toggleDarkMode = () => {
    darkMode == "light" ? setDarkMode("dark") : setDarkMode("light");
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={darkTheme}>{props.children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, ThemeContext };
