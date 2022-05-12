import React from "react";
import { Upload, Button,Spin } from "antd";

export default function Users() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh" ,
      }}
    >
      <Upload.Dragger
        multiple
        listType="picture"
        accept=".jpeg,.png,.jpg"
        beforeUpload={(file) => {
          console.log(file);
          return true;
        }}
        iconRender={() => {
            return<Spin></Spin>
        }}
      
      >
        Drag files here OR
        <br />
        <br />
        <Button>Upload</Button>
      </Upload.Dragger>
    </div>
  );
}