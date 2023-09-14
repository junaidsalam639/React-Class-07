import React from 'react';
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'left',
  color: 'green',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
  fontSize : '25px',
  fontWeight : 'bold'
};

const Product = () => {
  return (
    <div className='sticky-top'>
     <Layout>
      <Header style={headerStyle}>Product</Header><div style={{borderBottom :'4px solid green'}}></div>
    </Layout>
    </div>
  )
}

export default Product
