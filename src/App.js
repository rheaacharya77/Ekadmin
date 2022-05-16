import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import AppHeader from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";


import Mail from "./pages/Mail";
import Home from "./pages/Home";
import User from "./pages/User";
import Error from "./pages/Error";
import Sales from "./pages/Sales";
import Feedback from "./pages/Feedback";
import Messages from "./pages/Messages";
import Products from "./pages/Products";
import Analytics from "./pages/Analytics";
import Transactions from "./pages/Transactions";

import { Layout } from "antd";
const { Sider, Header,Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{minHeight:"100vh"}}>
        <Header style={{ position: "fixed", width: "100%", zIndex: 1 }}>
          <AppHeader />
        </Header>
        <Sider className="site-layout-background" width={200}>
          <Sidebar />
        </Sider>
        <Content style={{ margin: "55px 25px" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<User/>} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/products" element={<Products />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="*" element ={<Error/>}/>
        </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
