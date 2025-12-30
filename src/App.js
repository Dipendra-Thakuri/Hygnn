import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

import { AuthProvider } from "./context/AuthContext";

import LandingPage from "./pages/LandingPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <AuthProvider>
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
            <Route
              path="/about"
              element={<AboutUsPage isDark={isDark} setIsDark={setIsDark} />}
            />
            <Route
              path="/login"
              element={<LoginPage isDark={isDark} setIsDark={setIsDark} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
