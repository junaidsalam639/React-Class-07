import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    RightOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Card, Input, Radio } from 'antd';
import Card_Card from './Card_Card';
import Product from './Product';
import Input_Input from './Input_Input';
const { Header, Sider, Content } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
            <Product />
            <div>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={collapsed}>
                        <div className="demo-logo-vertical" />
                        <div className="input">
                            <h1 style={{ fontWeight: 'bold', color: 'green' }}>Filter</h1>
                            <Input_Input />
                        </div>
                        <div className="radio">
                            <h2 style={{ fontWeight: 'bold', color: 'green' }}>Price</h2>
                            <Radio style={{ color: 'white', padding: '6px' }}> <RightOutlined /> 100</Radio> <br />
                            <Radio style={{ color: 'white', padding: '6px' }}> <RightOutlined /> 200</Radio> <br />
                            <Radio style={{ color: 'white', padding: '6px' }}> <RightOutlined /> 300</Radio> <br />
                            <Radio style={{ color: 'white', padding: '6px' }}> <RightOutlined /> 400</Radio> <br />
                            <h2 style={{ fontWeight: 'bold', color: 'green' }}>Sort By</h2>
                            <Radio style={{ color: 'white', padding: '6px' }}> H T O L</Radio>
                            <Radio style={{ color: 'white', padding: '6px' }}> H T O L</Radio>
                            <h2 style={{ fontWeight: 'bold', color: 'green' }}>Sort By Categories</h2>
                            <Radio style={{ color: 'white', padding: '6px' }}>Mobile</Radio> <br />
                            <Radio style={{ color: 'white', padding: '6px' }}>Laptop</Radio> <br />
                            <Radio style={{ color: 'white', padding: '6px' }}>Cards</Radio> <br />
                        </div>
                    </Sider>
                    <Layout>
                        <Header
                            style={{
                                padding: 0,
                                background: colorBgContainer,
                            }}
                        >
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        </Header>
                        <div className="input_group_main">
                           
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Card_Card />
                            <Card_Card />
                            <Card_Card />
                            <Card_Card />
                            <Card_Card />
                            <Card_Card />
                        </div>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}

export default Sidebar
