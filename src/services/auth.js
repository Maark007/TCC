export const isAuthenticated = () => localStorage.getItem("id") !== null;
export const getToken = () => localStorage.getItem("id");
export const logout = () => localStorage.clear();
