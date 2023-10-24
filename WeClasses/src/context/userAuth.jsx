import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [isCookie, setIsCookie] = useState();
  useEffect(() => {
    async function getCookie() {
      const cookie = await Cookies.get("token");
      setIsCookie(cookie);
    }

    getCookie();
  }, [isCookie]);

  return (
    <DataContext.Provider value={{ isCookie }}>{children}</DataContext.Provider>
  );
}
