import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import "./style.css";
import { useContext, useEffect } from "react";
import { $generateHtmlFromNodes } from "@lexical/html";
import { RootNode } from "lexical";
import ExampleTheme from "./Theme";
import ToolbarPlugin from "./ToolbarPlugin";
import { DataContextRichEditor } from "../../context/stories/stories";
import { DataContextRichRaw } from "../../context/stories/rawStory";

const placeholder = "Enter some rich text...";
const defaultValue =
  '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';

function MyOnChangePlugin({
  onChange,
  onRawStateChange,
}: {
  onChange: (editorState: string) => void;
  onRawStateChange: (rawState: unknown) => void; // Nueva función para el estado crudo
}) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      // Guardar el estado crudo directamente
      const rawState = editorState.toJSON(); // Obtiene el estado crudo serializado
      onRawStateChange(rawState);

      // Leer el estado y generar el HTML
      editorState.read(() => {
        const htmlString = $generateHtmlFromNodes(editor);
        onChange(htmlString);
      });
    });
  }, [editor, onChange, onRawStateChange]);

  return null;
}

function RichEditor({ text }: { text?: string }) {
  const editorConfig = {
    namespace: "React.js Demo",
    nodes: [RootNode],
    theme: ExampleTheme,
    editorState: !text ? defaultValue : text,
    onError(error: Error) {
      throw error;
    },
  };

  const { setName } = useContext(DataContextRichEditor);
  const setRaw = useContext(DataContextRichRaw).setName; // Nuevo contexto para el estado crudo

  // Función para manejar cambios de HTML
  function onChange(editorState: string) {
    setName(editorState);
  }

  // Función para manejar cambios de estado crudo
  function onRawStateChange(rawState: unknown) {
    setRaw(rawState); // Almacena el estado crudo serializado
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
        {/* Pasar ambas funciones: onChange y onRawStateChange */}
        <MyOnChangePlugin
          onChange={onChange}
          onRawStateChange={onRawStateChange}
        />
      </LexicalComposer>
    </div>
  );
}
export default RichEditor;
