import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import RichEditorProps from "../types/editorTypes";

function RichEditor({ set, value }: RichEditorProps) {
  return (
    <>
      <ReactQuill value={value} theme="snow" onChange={set} />
    </>
  );
}

export default RichEditor;
