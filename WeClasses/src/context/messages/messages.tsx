import { ReactNode, createContext, useState } from "react";
import { tab } from "../../types/tabsTypes";

const DataContextTabsMessages = createContext<tab>({
  name: "",
  setName: () => {},
});

function DataProviderTabsMessages({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string>("all");

  return (
    <DataContextTabsMessages.Provider value={{ name, setName }}>
      {children}
    </DataContextTabsMessages.Provider>
  );
}

export { DataContextTabsMessages, DataProviderTabsMessages };
