import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import RichEditorProps from "../types/editorTypes";

function RichEditor({ set, value }: RichEditorProps) {
  if (value) {
    return (
      <>
        <ReactQuill value={value} theme="snow" onChange={set} />
      </>
    );
  } else {
    return "loading";
  }
}

export default RichEditor;
