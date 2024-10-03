import { ReactNode, createContext, useState } from "react";

import { editor } from "../../types/editorTypes";

const DataContextRichEditor = createContext<editor>({
  name: "",
  setName: () => {},
});

function DataProviderRichEditor({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string>("");

  return (
    <DataContextRichEditor.Provider value={{ name, setName }}>
      {children}
    </DataContextRichEditor.Provider>
  );
}

export { DataContextRichEditor, DataProviderRichEditor };
