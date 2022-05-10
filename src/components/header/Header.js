import React from "react";
import profile from "../../profile.png";
import "./header.css";
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
          <div className="topbarIconContainer">
            <SettingOutlined />
          </div>
          <img src={profile} alt="profile" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
