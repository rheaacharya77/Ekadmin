import React from "react";
import { Table } from "antd";
import { salesData } from "../../dummyData";

export default function Salestable() {
  const columns = [
    {
      title: "Sales  Representative",
      dataIndex: "Sales Representative",
      key: "key",
    },
    { title: "Location", dataIndex: "Location", key: "key" },
    { title: "Region", dataIndex: "Region", key: "key" },
    { title: "Customer", dataIndex: "Customer", key: "key" },
    { title: "Quantity", dataIndex: "Quantity", key: "key",sorter:(a,b) => a.Quantity - b.Quantity},
    { title: "Unit Price", dataIndex: "Unit Price", key: "key"},
    { title: "Total", dataIndex: "Total", key: "key",sorter:(a,b) =>a.Total - b.Total},
  ];
  return (
    <div className="sales-table">
      <Table dataSource={salesData} columns={columns}
      bordered
      title={() => 'QUARTERLY SALES'}
      pagination={{pageSize:5}} >
      </Table>
    </div>
  );
}
