import React from 'react'
import { List, Avatar } from "antd";
import { userList } from "../../dummyData";


export default function Userfeatured() {
  return (
<>

    <div className="user-chart">
        <span className="featuredTitle">New Users</span>
    <List
      itemLayout="horizontal"
      dataSource={userList}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.profilepic} />}
            title={item.title}
            description={item.desc}
          />
          {item.icon}
        </List.Item>
      )}
    />
  </div>
</>

  
  )
}
