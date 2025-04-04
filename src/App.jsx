import React from "react";
import DictionaryPage from "./pages/DictionaryPage";
import ThemeProvider from "./context/ThemeContext";
const App = () => {
  return (
    <ThemeProvider>
      <DictionaryPage />;
    </ThemeProvider>
  );
};

export default App;
