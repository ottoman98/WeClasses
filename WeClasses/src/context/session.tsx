import { ReactNode, createContext, Dispatch, SetStateAction } from "react";
import { getCookies } from "../utils/cookies";

import { useEffect, useState } from "react";

const DataContext = createContext<{
  cookie: string | undefined;
  setCookie: Dispatch<SetStateAction<string | undefined>>;
}>({
  cookie: "",
  setCookie: () => {},
});

function DataProvider({ children }: { children: ReactNode }) {
  const [cookie, setCookie] = useState<string | undefined>(getCookies("token"));

  useEffect(() => {
    setCookie(getCookies("token"));
  }, [cookie]);

  return (
    <DataContext.Provider value={{ cookie, setCookie }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
