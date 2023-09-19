import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';

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
import { db, collection, addDoc, getDocs, where, doc, storage, ref, getDownloadURL, uploadBytes, query, updateDoc } from '../Config_Firebase/Firebase';
const { Header, Sider, Content, Footer } = Layout;

const Sidebar = () => {
    const [image, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState('');
    const [button, setButton] = useState('Add_Services');
    const [radio, setRadio] = useState('');
    const [handleInput, setHandleInput] = useState('');
    const [mobileLaptop, setMobileLaptop] = useState('');
    const [highLow1, setHighLow1] = useState('');

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleAllCard = () => {
        setRadio('');
    }

    const handleMobileLaptop = (e) => {
        setMobileLaptop(e);
        setRadio('12345');
        setHandleInput('12345')
    }
    const highLowHandle1 = (e) => {
        setHighLow1(e)
        setRadio('12345');
        setHandleInput('12345');
        setMobileLaptop('');
    }

    const Add_Edit = async () => {
        if (button == 'Add_Services') {
            if (title == '' || image == '' || price == '' || category == '' || description == '') {
                alert('Please Fill The Input !');
            }
            else {
                try {
                    const docRef = await addDoc(collection(db, "Detail_Figma_Project"), {
                        title: title,
                        price: price,
                        category: category,
                        description: description,
                    });
                    console.log("Document written with ID: ", docRef.id);
                    localStorage.setItem('id', docRef.id)
                    const storageRef = ref(storage, docRef.id);
                    uploadBytes(storageRef, image).then(async (snapshot) => {
                        console.log('Uploaded a blob or file!');
                        alert('Add_Card successfully')
                        window.location.reload()
                    });
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }
        }
        else if (button == 'Edit_Services') {
            if (title == '' || image == '' || price == '' || category == '' || description == '') {
                alert('Please Fill The Input !');
            } else {
                const washingtonRef = doc(db, "Detail_Figma_Project", id);
                await updateDoc(washingtonRef, {
                    title: title,
                    price: price,
                    category: category,
                    description: description,
                });
                const storageRef = ref(storage, id);
                uploadBytes(storageRef, image).then((snapshot) => {
                    console.log('Uploaded a blob or file!');
                    alert('Edit successfully')
                    window.location.reload()
                });
            }
        }
    }

    return (
        <div>
            <Product />
            <Layout>
                <Sider width={320} style={{ backgroundColor: '#fff' }}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="demo-logo-vertical" />
                    <div className="input">
                        <h4 style={{ fontWeight: 'bold', color: 'black', marginTop: '15px' }}>Filter</h4>
                        <Input_Input dataInput={setHandleInput} />
                    </div>
                    <div className="radio">
                        <h5 style={{ fontWeight: 'bold', color: 'black', marginTop: '20px' }}>Price</h5>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={100} onChange={(e) => setRadio(e.target.value)} /> <RightOutlined /> <span>100</span> <br />
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={200} onChange={(e) => setRadio(e.target.value)} /> <RightOutlined /> <span>200</span> <br />
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={300} onChange={(e) => setRadio(e.target.value)} /> <RightOutlined /> <span>300</span> <br />
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={400} onChange={(e) => setRadio(e.target.value)} /> <RightOutlined /> <span>400</span> <br />
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={500} onChange={(e) => setRadio(e.target.value)} /> <RightOutlined /> <span>500</span> <br />
                        <div className="btn" style={{ width: '100%' }}>
                            <button className="btn-success" onClick={handleAllCard}>All_Card_Show</button>
                        </div>

                        <h5 style={{ fontWeight: 'bold', color: 'black', marginTop: '20px' }}>Sort By</h5>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={'high'} onClick={(e) => highLowHandle1(e.target.value)} /> <RightOutlined /> <span>H I G H</span>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={'low'} onClick={(e) => highLowHandle1(e.target.value)} /> <RightOutlined /> <span>L O W </span>
                        <h5 style={{ fontWeight: 'bold', color: 'black', marginTop: '20px' }}>Sort By Categories</h5>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={'mobile'} onClick={(e) => handleMobileLaptop(e.target.value)} /> <RightOutlined /><span>Mobile</span> <br />
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={'laptop'} onClick={(e) => handleMobileLaptop(e.target.value)} /> <RightOutlined /> <span>Laptop</span> <br />
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={handleAllCard} /> <RightOutlined /> <span>Cards</span> <br />
                    </div>
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    />
                    <Content
                        style={{
                            margin: '24px 16px 0',
                        }}
                    >
                        <div style={{ padding: 24, minHeight: 360, }} >
                            <div className="input_group_main">
                                <div className="input_group">
                                    <div className="label">
                                        <label htmlFor="Title text-left">Title</label> <br />
                                        <input type="text" maxLength={20} id='title' placeholder='Title Max-length-20' value={title} onChange={(e) => setTitle(e.target.value)} style={{ textTransform: 'capitalize' }} />
                                    </div>
                                    <div className="label">
                                        <label htmlFor="Image">Image</label> <br />
                                        <input type="file" id='image' placeholder='Image' onChange={(e) => setImg(e.target.files[0])} />
                                    </div>
                                    <div className="label">
                                        <label htmlFor="Price">Price</label> <br />
                                        <input type="number" maxLength={8} id='price' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                                    </div>
                                </div>
                                <div className="input_group mt-4">
                                    <div className="label">
                                        <label htmlFor="Category">Category</label> <br />
                                        <input type="text" id='category' maxLength={20} placeholder='Category Max-length-20' value={category} onChange={(e) => setCategory(e.target.value)} style={{ textTransform: 'lowercase' }} />
                                    </div>
                                    <div className="label">
                                        <label htmlFor="Description">Description</label> <br />
                                        <input type="text" id='description' maxLength={50} placeholder='Description Max-length-50' value={description} onChange={(e) => setDescription(e.target.value)} style={{ textTransform: 'capitalize' }} />
                                    </div>
                                    <div className="label">
                                        <button type="button" onClick={Add_Edit}>{button}</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Card_Card dataTitle={setTitle} dataPrice={setPrice} dataCategory={setCategory} dataDescription={setDescription} dataId={setId} dataImage={setImg} dataButton={setButton} dataRadio={radio} dataInput2={handleInput} dataMobileLaptop={mobileLaptop} dataHighLow1={highLow1} />
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default Sidebar

// // https://www.figma.com/proto/ZyGunJ8WtYjvoKOTQTDlVZ/Sarf-o-Nahw-ki-dunya-team-library?type=design&node-id=3835-2&scaling=scale-down&page-id=514%3A2

