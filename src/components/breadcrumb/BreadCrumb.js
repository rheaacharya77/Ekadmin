import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "./breadcrumb.css";

export default function BreadCrumb() {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.toUpperCase().split('/');

  return (
    <>
      <Breadcrumb className="breadcrumb-wrap">
        <Breadcrumb.Item className="breadcrumb-icon">
          <Link to="/home">
            <HomeOutlined />
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="breadcrumb-text">{path}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
