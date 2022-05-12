import React from "react";
import { useNavigate } from "react-router";
import { Menu } from "antd";
import {
  MenuOutlined,
  BarChartOutlined,
  BellOutlined,
  RiseOutlined,
  ShoppingOutlined,
  HomeOutlined,
  FundOutlined,
  UserOutlined,
  AreaChartOutlined,
  DollarOutlined,
  MailOutlined,
  MessageOutlined,
  CommentOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Dashboard", "sub1", <AreaChartOutlined />, [
    getItem("Home", "home", <HomeOutlined />),
    getItem("Analytics", "analytics", <FundOutlined />),
    getItem("Sales", "sales", <RiseOutlined />),
  ]),

  getItem("Quick Menu", "sub2", <MenuOutlined />, [
    getItem("Users", "users", <UserOutlined />),
    getItem("Products", "products", <ShoppingOutlined />),
    getItem("Transactions", "transactions", <DollarOutlined />),
  ]),

  getItem("Notifications", "sub3", <BellOutlined />, [
    getItem("Mail", "mail", <MailOutlined />),
    getItem("Feedback", "feedback", <CommentOutlined />),
    getItem("Messages", "messages", <MessageOutlined />),
  ]),
];
export default function Sidebar() {
  let navigate = useNavigate();

  const onClick = (e) => {
    console.log(e.key);
    navigate(`/${e.key}`);
  };

  return (

      <Menu
        onClick={onClick}
        style={{ height: "100%" }}
        defaultSelectedKeys={["home"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
  );
}
