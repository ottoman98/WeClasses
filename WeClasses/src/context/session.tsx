import { ReactNode, createContext } from "react";
import { getCookies } from "../utils/cookies";

import { useEffect, useState } from "react";
import { dataContextUser } from "../types/contextTypes";

const DataContextSession = createContext<dataContextUser>({
  cookie: "",
  setCookie: () => {},
});

function DataProviderSession({ children }: { children: ReactNode }) {
  const [cookie, setCookie] = useState<string | undefined>(getCookies("token"));

  useEffect(() => {
    const interval = setInterval(() => {
      const newCookie = getCookies("token");
      if (newCookie !== cookie) {
        setCookie(newCookie);
      }
    }, 1000); // Verificar cada segundo

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [cookie]); // Dependencia de useEffect

  return (
    <DataContextSession.Provider value={{ cookie, setCookie }}>
      {children}
    </DataContextSession.Provider>
  );
}

export { DataContextSession, DataProviderSession };
