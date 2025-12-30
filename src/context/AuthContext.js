import React, { createContext, useContext, useState } from "react";
import api from "../api/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");

    return email ? { email, role, name } : null;
  });

  const login = async (email, password) => {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

    const data = res.data;

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    localStorage.setItem("email", data.email);
    localStorage.setItem("role", data.role);
    localStorage.setItem("name", data.name);

    setUser({
      email: data.email,
      role: data.role,
      name: data.name,
    });
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
