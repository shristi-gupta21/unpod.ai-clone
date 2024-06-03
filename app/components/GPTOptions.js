"use client";
import React from "react";
import { Select, Space } from "antd";
const { Option } = Select;
function GPTOptions() {
  return (
    <Space.Compact block>
      <Select allowClear defaultValue="Option1-1">
        <Option value="Option1-1">Option1-1</Option>
        <Option value="Option1-2">Option1-2</Option>
      </Select>
    </Space.Compact>
  );
}
export default GPTOptions;
