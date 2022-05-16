import React from "react";
import profile from "../../profile.png";

import { Menu, Dropdown, Space } from "antd";
import {useNavigate} from 'react-router'


export default function ImageDropdown() {
  let navigate = useNavigate();
  
  const onClick = (e) => {
    console.log(e.key);
    navigate(`/${e.key}`);
  };
  
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "Edit Profile",
          key: "users",
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

return(  <Dropdown overlay={menu}>
      <Space>
      <img src={profile} alt="profile" className="topAvatar" />
      </Space>
  </Dropdown>
);
}
