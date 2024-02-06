import { ReactNode, createContext } from "react";
import { getCookies } from "../utils/cookies";
import { useJwt } from "react-jwt";

import { useEffect, useState } from "react";
import { dataContextUser } from "../types/contextTypes";

const DataContextSession = createContext<dataContextUser>({
  cookie: "",
  setCookie: () => {},
});

function DataProviderSession({ children }: { children: ReactNode }) {
  const [cookie, setCookie] = useState<string | undefined>(getCookies("token"));
  const { decodedToken } = useJwt(cookie as string);

  useEffect(() => {
    setCookie(getCookies("token"));
  }, [cookie]);

  return (
    <DataContextSession.Provider value={{ cookie, decodedToken, setCookie }}>
      {children}
    </DataContextSession.Provider>
  );
}

export { DataContextSession, DataProviderSession };
