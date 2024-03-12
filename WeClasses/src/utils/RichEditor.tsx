import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import RichEditorProps from "../types/editorTypes";

function RichEditor({ set, value }: RichEditorProps) {
  return (
    <>
      <ReactQuill
        id="description"
        value={value}
        theme="snow"
        onChange={set}
        className="h-40"
      />
    </>
  );
}

export default RichEditor;
