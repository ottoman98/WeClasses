import { ReactNode, createContext, useState } from "react";
import { storiesLanguage } from "../../types/storiesLanguage";

const DataContextStoriesLanguage = createContext<storiesLanguage>({
  name: "en",
  setName: () => {},
});

function DataProviderStoriesLanguage({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string>("en");

  return (
    <DataContextStoriesLanguage.Provider value={{ name, setName }}>
      {children}
    </DataContextStoriesLanguage.Provider>
  );
}

export { DataContextStoriesLanguage, DataProviderStoriesLanguage };
