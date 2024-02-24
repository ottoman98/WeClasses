import { ReactNode, createContext, useState } from "react";
import { tab } from "../types/tabsTypes";

const DataContextTabs = createContext<tab>({ name: "", setName: () => {} });

function DataProviderTabs({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string>("home");

  return (
    <DataContextTabs.Provider value={{ name, setName }}>
      {children}
    </DataContextTabs.Provider>
  );
}

export { DataContextTabs, DataProviderTabs };
