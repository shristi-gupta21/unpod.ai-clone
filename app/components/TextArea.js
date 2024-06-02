import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { styled } from "styled-components";

function TextArea() {
  const modules = {
    toolbar: false,
  };
  const [value, setValue] = useState("");

  const Area = styled(ReactQuill)`
    &&& {
      background: white;
    }
    &&&::placeholder {
      font-style: oblique;
    }
  `;
  return (
    <Area
      value={value}
      theme="snow"
      onChange={setValue}
      modules={modules}
      placeholder="Ask me to do anything..."
    />
  );
}

export default TextArea;
