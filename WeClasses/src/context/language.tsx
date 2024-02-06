import { ReactNode, createContext, useState } from "react";
import { dataContextLanguage } from "../types/contextTypes";
import spanish from "../translations/spanish";
import { translationType } from "../types/translationTypes";

const DataContextLanguage = createContext<dataContextLanguage>({
  translation: spanish,
  setTranslation: () => {},
});

function DataProviderLanguage({
  children,
  defaultLanguage,
}: {
  children: ReactNode;
  defaultLanguage: string;
}) {
  defaultLanguage;

  const [translation, setTranslation] = useState<translationType>(spanish);

  return (
    <DataContextLanguage.Provider value={{ translation, setTranslation }}>
      {children}
    </DataContextLanguage.Provider>
  );
}

export { DataProviderLanguage, DataContextLanguage };
