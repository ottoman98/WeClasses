import { ReactNode, createContext, useState } from "react";

import { editor } from "../../types/editorTypes";

const DataContextRichRaw = createContext<editor>({
  name: "",
  setName: () => {},
});

function DataProviderRichRaw({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string>("");

  return (
    <DataContextRichRaw.Provider value={{ name, setName }}>
      {children}
    </DataContextRichRaw.Provider>
  );
}

export { DataContextRichRaw, DataProviderRichRaw };
