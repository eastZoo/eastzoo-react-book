import { Button } from "@/components/atoms/Button";
import { MainTemplate } from "@/components/templates/MainTemplate";
import React from "react";

const index = () => {
  return (
    <MainTemplate>
      <div>
        <div>button Components</div>
        <div></div>
        <Button type="button" color="primary" size="lg" label="저장" />
      </div>
    </MainTemplate>
  );
};

export default index;
