import React from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import "../../src/components/featured/featured.css";
import { ArrowUpOutlined } from "@ant-design/icons";
import Areachart from "../components/areachart/Areachart";
import Stackedbarchart from "../components/stackedbarchart/Stackedbarchart";

export default function Analytics() {
  return (
    <>
      <BreadCrumb />
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Total Users</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">700</span>
            <span className="featuredMoneyRate">
              <ArrowUpOutlined className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Compared to last year</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Total Orders</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">10,000</span>
            <span className="featuredMoneyRate">
              <ArrowUpOutlined className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Compared to last year</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Shipped Orders</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">3,300</span>
            <span className="featuredMoneyRate">
              <ArrowUpOutlined className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Compared to last year</span>
        </div>
      </div>
      <div className="chart-featured">
        <div className="chart-featuredItem">
          <Areachart />
          </div>
          <div className="chart-featuredItem">
          <Stackedbarchart />
          </div>
        </div>
    </>
  );
}
