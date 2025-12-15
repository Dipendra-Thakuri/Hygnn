import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

import LandingPage from "./pages/LandingPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LandingPage isDark={isDark} setIsDark={setIsDark} />}
          />
          <Route
            path="/contact"
            element={<ContactUsPage isDark={isDark} setIsDark={setIsDark} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
