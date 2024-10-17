import { ReactNode, createContext, useState } from "react";

import { editor } from "../../types/editorTypes";

const DataContextStoryId = createContext<editor>({
  name: "",
  setName: () => {},
});

function DataProviderStoryId({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string>("");

  return (
    <DataContextStoryId.Provider value={{ name, setName }}>
      {children}
    </DataContextStoryId.Provider>
  );
}

export { DataContextStoryId, DataProviderStoryId };
