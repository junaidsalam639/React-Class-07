import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const Input_Input = () => {
  return (
    <div style={{padding:'10px'}}>
    <Search placeholder="input search text" enterButton />
    </div>
  )
}

export default Input_Input
