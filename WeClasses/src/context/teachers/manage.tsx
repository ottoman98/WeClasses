import { ReactNode, createContext, useState } from "react";
import { tab } from "../../types/tabsTypes";

const DataContextManage = createContext<tab>({
  name: "",
  setName: () => {},
});

function DataProviderManage({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string>("");

  return (
    <DataContextManage.Provider value={{ name, setName }}>
      {children}
    </DataContextManage.Provider>
  );
}

export { DataContextManage, DataProviderManage };
