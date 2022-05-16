import React from 'react';
import {Result,Button} from 'antd';
import{Link} from "react-router-dom"
export default function Error() {
  return (
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited doesn't exist"
    extra={<Button type="primary">
        <Link to="/home">
            Back Home 
        </Link>
    </Button>}    
    
    
    />
  )
}
