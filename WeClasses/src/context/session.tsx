import { ReactNode, createContext } from "react";
import { getCookies } from "../utils/cookies";
import { useJwt } from "react-jwt";

import { useEffect, useState } from "react";
import { dataContextUser } from "../types/contextTypes";

const DataContext = createContext<dataContextUser>({
  cookie: "",
  setCookie: () => {},
});

function DataProvider({ children }: { children: ReactNode }) {
  const [cookie, setCookie] = useState<string | undefined>(
    getCookies("_cfuvid")
  );
  const { decodedToken } = useJwt(cookie as string);

  useEffect(() => {
    setCookie(getCookies("_cfuvid"));
  }, [cookie]);

  return (
    <DataContext.Provider value={{ cookie, decodedToken, setCookie }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
