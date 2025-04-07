import React from "react";
import DictionaryPage from "./pages/DictionaryPage";
import ThemeProvider from "./context/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/*" element={<DictionaryPage />}></Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
