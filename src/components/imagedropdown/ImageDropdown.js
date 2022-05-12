import React from "react";
import profile from "../../profile.png";

import { Menu, Dropdown, message, Space } from "antd";


const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu
    onClick={onClick}
    items={[
      {
        label: "Edit Profile",
        key: "1",
      },
      {
        label: "Settings",
        key: "2",
      },
      {
        label: "Logout",
        key: "3",
      },
    ]}
  />
);

export default function ImageDropdown() {
return(  <Dropdown overlay={menu}>
      <Space>
      <img src={profile} alt="profile" className="topAvatar" />
      </Space>
  </Dropdown>
);
}
