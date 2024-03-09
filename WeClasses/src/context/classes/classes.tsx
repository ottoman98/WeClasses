import { ReactNode, createContext, useState } from "react";
import { tab } from "../../types/tabsTypes";

const DataContextTabsClasses = createContext<tab>({
  name: "",
  setName: () => {},
});

function DataProviderTabsClasses({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string>("");

  return (
    <DataContextTabsClasses.Provider value={{ name, setName }}>
      {children}
    </DataContextTabsClasses.Provider>
  );
}

export { DataContextTabsClasses, DataProviderTabsClasses };
