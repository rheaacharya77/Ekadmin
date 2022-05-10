import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Mail from "./components/mail/Mail";
import Home from "./components/home/Home";
import Users from "./components/user/User";
import Sales from "./components/sales/Sales";
import AppHeader from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Reports from "./components/reports/Reports";
import Feedback from "./components/feedback/Feedback";
import Messages from "./components/messages/Messages";
import Products from "./components/products/Products";
import Analytics from "./components/analytics/Analytics";
import Transactions from "./components/transactions/Transactions";

import { Layout } from "antd";
const { Sider, Header } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header style={{ position: "fixed", width: "100%", zIndex: 1 }}>
          <AppHeader />
        </Header>
        <Sider className="site-layout-background" width={200}>
          <Sidebar />
        </Sider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
