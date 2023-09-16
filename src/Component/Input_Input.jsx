import { AudioOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
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

const Input_Input = (props) => {
  const {
     dataInput
  } = props
  const [input , setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault()
    dataInput(input)
    setInput('')
  }
  return (
    <div style={{padding:'10px'}}>
      <form action="" onSubmit={handleSearch}>
    <Search placeholder="Enter Your Price!" value={input} type='number' enterButton onChange={(e) => setInput(e.target.value)} />
      </form>
    </div>
  )
}

export default Input_Input
