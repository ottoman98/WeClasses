import { ReactNode, createContext, useState } from "react";
import { tab } from "../../types/tabsTypes";

const DataContextTabsSettings = createContext<tab>({
  name: "account",
  setName: () => {},
});

function DataProviderTabsSettings({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string>("account");

  return (
    <DataContextTabsSettings.Provider value={{ name, setName }}>
      {children}
    </DataContextTabsSettings.Provider>
  );
}

export { DataContextTabsSettings, DataProviderTabsSettings };
