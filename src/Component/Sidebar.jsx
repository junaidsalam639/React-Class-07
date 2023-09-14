import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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
                            <h4 style={{ fontWeight: 'bold', color: 'white', marginTop: '15px' }}>Filter</h4>
                            <Input_Input />
                        </div>
                        <div className="radio">
                            <h5 style={{ fontWeight: 'bold', color: 'white', marginTop: '20px' }}>Price</h5>
                            <Radio style={{ color: 'white', padding: '6px' }}> <RightOutlined /> 100</Radio> <br />
                            <Radio style={{ color: 'white', padding: '6px' }}> <RightOutlined /> 200</Radio> <br />
                            <Radio style={{ color: 'white', padding: '6px' }}> <RightOutlined /> 300</Radio> <br />
                            <Radio style={{ color: 'white', padding: '6px' }}> <RightOutlined /> 400</Radio> <br />
                            <h5 style={{ fontWeight: 'bold', color: 'white', marginTop: '20px' }}>Sort By</h5>
                            <Radio style={{ color: 'white', padding: '6px' }}> H T O L</Radio>
                            <Radio style={{ color: 'white', padding: '6px' }}> H T O L</Radio>
                            <h5 style={{ fontWeight: 'bold', color: 'white', marginTop: '20px' }}>Sort By Categories</h5>
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
                           <div className="input_group">
                            <div className="label">
                            <label htmlFor="Title">Title</label> <br />
                            <input type="text" placeholder='Title' />
                            </div>
                            <div className="label">
                            <label htmlFor="Image">Image</label> <br />
                            <input type="text" placeholder='Image' />
                            </div>
                            <div className="label">
                            <label htmlFor="Price">Price</label> <br />
                            <input type="text" placeholder='Price' />
                            </div>
                           </div>
                           <div className="input_group mt-4">
                           <div className="label">
                            <label htmlFor="Category">Category</label> <br />
                            <input type="text" placeholder='Category' />
                            </div>
                            <div className="label">
                            <label htmlFor="Description">Description</label> <br />
                            <input type="text" placeholder='Description' />
                            </div>
                            <div className="label">
                            <button type="button" class="btn btn-success">Add / Edit / service</button>
                            </div>
                           </div>
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
