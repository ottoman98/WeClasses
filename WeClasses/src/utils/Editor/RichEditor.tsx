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
import { $getRoot, $createParagraphNode, $createTextNode } from "lexical";

const placeholder = "Enter some rich text...";

function MyOnChangePlugin({
  onChange,
}: {
  onChange: (editorState: string) => void;
}) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const htmlString = $generateHtmlFromNodes(editor);
        onChange(htmlString);
      });
    });
  }, [editor, onChange]);

  return null;
}

function RichEditor({ text }: { text?: string }) {
  const editorConfig = {
    namespace: "React.js Demo",
    nodes: [RootNode],
    theme: ExampleTheme,
    onError(error: Error) {
      throw error;
    },
    editorState: () => {
      const root = $getRoot();
      root.clear();
      const p = $createParagraphNode();
      p.append($createTextNode(text));
      root.append(p);
    },
  };
  function onChange(editorState: string) {
    setName(editorState);
  }
  const { setName } = useContext(DataContextRichEditor);

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
