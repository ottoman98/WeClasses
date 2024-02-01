import { ReactNode, createContext, useState } from "react";

const DataContext = createContext<string>("english");

function DataProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<{ language: string }>({
    language: "english",
  });

  return (
    <DataContext.Provider value={(language, setLanguage)}>
      {children}
    </DataContext.Provider>
  );
}
export { DataContext, DataProvider };
