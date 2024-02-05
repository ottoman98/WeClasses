import { ReactNode, createContext, useState } from "react";
import { dataContextLanguage } from "../types/contextTypes";
import english from "../languages/english";

const DataContext = createContext<dataContextLanguage>({
  translation: english,
  setLanguage: () => {},
});

function DataProviderLanguage({
  children,
  defaultLanguage,
}: {
  children: ReactNode;
  defaultLanguage: string;
}) {
  const [language, setLanguage] = useState<string>(defaultLanguage);
  const translation = english;

  if (language === "english") {
    console.log(2);
  }

  return (
    <DataContext.Provider value={{ translation, setLanguage }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataProviderLanguage, DataContext };
