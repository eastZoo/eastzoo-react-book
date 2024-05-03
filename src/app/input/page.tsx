import { InputText } from "@/components/atoms/Input/InputText";
import React from "react";

const InputPage = () => {
  return (
    <div>
      <div>input Components</div>
      <InputText label="인풋텍스트" necessary={true} />
    </div>
  );
};

export default InputPage;
