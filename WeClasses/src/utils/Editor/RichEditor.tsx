import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import "./style.css";
import { useEffect, useState } from "react";
import { $generateHtmlFromNodes } from "@lexical/html";
import { $getRoot } from "lexical";
import { RootNode } from "lexical";
import ExampleTheme from "./Theme";
import ToolbarPlugin from "./ToolbarPlugin";

const placeholder = "Enter some rich text...";

const editorConfig = {
  namespace: "React.js Demo",
  nodes: [RootNode],
  theme: ExampleTheme,
  onError(error) {
    throw error;
  },
};

function MyOnChangePlugin({ onChange }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);

      // Lee el estado del editor para convertir todo el contenido en HTML
      editorState.read(() => {
        const root = $getRoot(); // Obtenemos el nodo raíz (todo el contenido)
        const htmlString = $generateHtmlFromNodes(editor); // Generamos el HTML desde los nodos
        console.log("Generated HTML:", htmlString); // Imprimimos el HTML generado
      });
    });
  }, [editor, onChange]);

  return null;
}

function RichEditor() {
  const [editorState, setEditorState] = useState();
  function onChange(editorState) {
    setEditorState(editorState);
  }

  return (
    <div className="">
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <ToolbarPlugin />
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={
                <ContentEditable
                  className="editor-input"
                  aria-placeholder={placeholder}
                  placeholder={
                    <div className="editor-placeholder">{placeholder}</div>
                  }
                />
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
          </div>
        </div>
        <MyOnChangePlugin onChange={onChange} />
      </LexicalComposer>
    </div>
  );
}

export default RichEditor;
