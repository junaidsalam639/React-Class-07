import React, { useState, useEffect } from 'react';
import { db, collection, getDocs, storage, ref, getDownloadURL, query, deleteDoc, doc, deleteObject, getDoc } from '../Config_Firebase/Firebase';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const Card_Card = (props) => {
  const {
    dataRadio, dataInput2, dataMobileLaptop
  } = props;

  const [figmaData, setFigmaData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, "Detail_Figma_Project"));
      const querySnapshot = await getDocs(q);
      const dataPromises = querySnapshot.docs.map(async (doc) => {
        const url = await getDownloadURL(ref(storage, doc.id));
        return {
          id: doc.id,
          data: doc.data(),
          downloadUrl: url,
        };
      });
      const newData = await Promise.all(dataPromises);
      setFigmaData(newData);
    }
    fetchData();
  }, []);

  const dele = async (e) => {
    console.log(e);
    await deleteDoc(doc(db, "Detail_Figma_Project", e));
    const desertRef = ref(storage, e);
    deleteObject(desertRef).then(() => {
      alert('Delete successfully');
      window.location.reload();
    }).catch((error) => {
      console.log(error);
    });
  };

  const edit = async (e) => {
    console.log(e);
    const docRef = doc(db, "Detail_Figma_Project", e);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      getDownloadURL(ref(storage, e))
        .then((url) => {
          // Handle dataTitle, dataPrice, dataCategory, dataDescription, dataId, dataImage, and dataButton accordingly
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("No such document!");
    }
  };

  const style = {
    width: 300,
    height: 200,
  };

  let displayContent;

  if (dataRadio === '') {
    displayContent = figmaData.map((item) => (
      <Card
        key={item.id}
        style={{
          width: 300,
          marginTop: 25,
          marginBottom: 25,
          height: 350,
        }}
        cover={
          <img style={style}
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
    ));
  } else if (figmaData.length > 0) {
    const filteredCards = figmaData.filter((item) => {
      return item.data.price === dataRadio || item.data.price === dataInput2;
    });
    if (filteredCards.length > 0) {
      displayContent = filteredCards.map((item) => (
        <Card
          key={item.id}
          style={{
            width: 300,
            marginTop: 25,
            marginBottom: 25,
            height: 350,
          }}
          cover={
            <img style={style}
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
      ));
    } else {
      displayContent = <p>No cards found for the selected price range.</p>;
    }
  } else if (dataMobileLaptop && figmaData.length > 0) {
    const filteredCards2 = figmaData.filter((item) => {
      return item.data.category === dataMobileLaptop;
    });
    if (filteredCards2.length > 0) {
      displayContent = filteredCards2.map((item) => (
        <Card
          key={item.id}
          style={{
            width: 300,
            marginTop: 25,
            marginBottom: 25,
            height: 350,
          }}
          cover={
            <img style={style}
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
      ));
    } else {
      displayContent = <p>No cards found for the selected category.</p>;
    }
  } else {
    displayContent = null; // Handle unexpected conditions gracefully
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', width: '100%' }} className='my-5'>
      {displayContent}
    </div>
  );
};

export default Card_Card;
