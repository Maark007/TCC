import React, { useContext, useState, createContext, useEffect } from "react";
import api from "../services/api";
import { getToken } from "../services/auth";

const UserContext = createContext(null);

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser() was called outside of UserContextProvider.");
  }
  return ctx;
}

export function UserContextProvider({ children }) {
  const [user, setUser] = useState("Teste");

  useEffect(() => {
    async function loadData() {
      try {
        const usuary = await api.get(`/user/${getToken()}`);
        setUser(usuary.data);
      } catch {}
    }
    loadData();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
