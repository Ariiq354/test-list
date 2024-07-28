import { Spin } from "antd";
import React from "react";

export default function loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Spin size="large" />
    </div>
  );
}
