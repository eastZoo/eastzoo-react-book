import { Button } from "@/components/atoms/Button";
import { MainTemplate } from "@/components/templates/MainTemplate";
import React from "react";

const ButtonPage = () => {
  return (
    <div>
      <div>button Components</div>
      <Button type="button" color="primary" size="lg" label="저장" />
    </div>
  );
};

export default ButtonPage;
