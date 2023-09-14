import React, { useState, useEffect } from 'react';
import { db, collection, getDocs, storage, ref, getDownloadURL , query } from '../Config_Firebase/Firebase';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const Card_Card = () => {
  const [figmaData, setFigmaData] = useState([]);

  useEffect(()=> {
    async function fetchData(){
      const q = query(collection(db, "Detail_Figma_Project"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async(doc) => {
      console.log(doc.id, " => ", doc.data());
        const dataPromises = querySnapshot.docs.map(async (doc) => {
        const url = await getDownloadURL(ref(storage, doc.id));
        return {
          id: doc.id,
          data: doc.data(),
          downloadUrl: url,
        };
      });
      const newData = await Promise.all(dataPromises);
      setFigmaData(newData)
    });
  }
  fetchData()
  },[]) 

  return (
    <>
      <div style={{display : 'flex' , flexDirection : 'row' , justifyContent : 'space-around' , alignItems : 'center' , flexWrap : 'wrap' , width : '100%'}} className='my-4'>
        {figmaData.map((item) => (
          <Card
            key={item.id}
            style={{
              width: 300,
              marginTop: 20,
              marginBottom: 20,
              height : 300
            }}
            cover={
              <img
                alt="example"
                src={item.downloadUrl}
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title={item.data.title}
              description={item.data.description + " Price : " + item.data.price}
              />
          </Card>
        ))}
      </div>
    </>
  );
};

export default Card_Card;






