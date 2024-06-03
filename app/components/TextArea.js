"use client";
import { Input } from "antd";
import { styled } from "styled-components";
import GPTDropDown from "./GPTOptions";
import { Form } from "antd";

function TextArea() {
  const FormDiv = styled(Form)`
    background: white;
    padding: 1rem;
    border-radius: 12px;
  `;

  const FormInput = styled(Input)`
    border: none;
  `;
  return (
    <FormDiv>
      <GPTDropDown />
      <FormInput placeholder="Ask me to do anything..." />
    </FormDiv>
  );
}

export default TextArea;
