import React from "react";
import "./header.css";
import profile from "../../profile.png";

import ImageDropdown from "../imagedropdown/ImageDropdown";
import {BellOutlined, SettingOutlined, GlobalOutlined} from "@ant-design/icons";

export default function AppHeader() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">EKadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <BellOutlined/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
          <GlobalOutlined />
            <span className="topIconBadge">2</span>
          </div>
          <ImageDropdown/> 
        </div>
      </div>
    </div>
  )
}
