import { ReactNode, createContext, useState } from "react";
import { dataContextLanguage } from "../types/contextTypes";
import english from "../translations/english/english";
import { translationType } from "../types/translationTypes";

const DataContextLanguage = createContext<dataContextLanguage>({
  translation: english,
  setTranslation: () => {},
});

function DataProviderLanguage({ children }: { children: ReactNode }) {
  const [translation, setTranslation] = useState<translationType>(english);

  return (
    <DataContextLanguage.Provider value={{ translation, setTranslation }}>
      {children}
    </DataContextLanguage.Provider>
  );
}

export { DataProviderLanguage, DataContextLanguage };
