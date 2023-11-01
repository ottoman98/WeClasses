import { createContext, useState } from "react";
import Cookies from "js-cookie";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [isCookie, setIsCookie] = useState();

  async function getCookie() {
    const cookie = await Cookies.get("token");
    setIsCookie(cookie);
  }

  getCookie();

  async function deleteCookie() {
    await Cookies.remove("token");
  }

  return (
    <DataContext.Provider value={{ isCookie, deleteCookie }}>
      {children}
    </DataContext.Provider>
  );
}
