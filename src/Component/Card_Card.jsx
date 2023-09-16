import React, { useState, useEffect } from 'react';
import { db, collection, getDocs, storage, ref, getDownloadURL, query, deleteDoc, doc, deleteObject, getDoc } from '../Config_Firebase/Firebase';
import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const Card_Card = (props) => {
  const {
    dataTitle, dataPrice, dataCategory, dataDescription, dataId, dataImage, dataButton, dataRadio , dataInput2
  } = props
  const [figmaData, setFigmaData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, "Detail_Figma_Project"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => {
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
  }, [])


  const dele = async (e) => {
    console.log(e);
    await deleteDoc(doc(db, "Detail_Figma_Project", e));
    const desertRef = ref(storage, e);
    deleteObject(desertRef).then(() => {
      alert('Delete successfully');
      window.location.reload()
    }).catch((error) => {
      console.log(error);
    });
  }



  const edit = async (e) => {
    console.log(e);
    const docRef = doc(db, "Detail_Figma_Project", e);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      getDownloadURL(ref(storage, e))
        .then((url) => {
          dataTitle(docSnap.data().title)
          dataPrice(docSnap.data().price)
          dataCategory(docSnap.data().category)
          dataDescription(docSnap.data().description)
          dataId(e)
          dataImage(url)
          dataButton('Edit_Services')
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("No such document!");
    }
  }

  console.log(dataRadio);
  console.log(dataInput2);
  const filteredCards = figmaData.filter((item) => {
    return item.data.price === dataRadio
  })
  // const filteredCards = figmaData.filter((item) =>  item.data.price === dataRadio);

  if (dataRadio == '') {
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', width: '100%' }} className='my-5'>
          {figmaData.map((item) => (
            <Card
              key={item.id}
              style={{
                width: 300,
                marginTop: 25,
                marginBottom: 25,
                height: 300,
              }}
              cover={
                <img
                  alt="example"
                  src={item.downloadUrl}
                />
              }
              actions={[
                <EditOutlined key="edit" onClick={() => edit(item.id)} />,
                <DeleteOutlined key="setting" onClick={() => dele(item.id)} />,
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
  }
  else {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', width: '100%' }} className='my-5'>
        {filteredCards.map((item) => (
          <Card
            key={item.id}
            style={{
              width: 300,
              marginTop: 25,
              marginBottom: 25,
              height: 300,
            }}
            cover={
              <img
                alt="example"
                src={item.downloadUrl}
              />
            }
            actions={[
              <EditOutlined key="edit" onClick={() => edit(item.id)} />,
              <DeleteOutlined key="setting" onClick={() => dele(item.id)} />,
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
    )
  }
};

export default Card_Card;






