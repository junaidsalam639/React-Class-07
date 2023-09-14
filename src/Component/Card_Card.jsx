import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const Card_Card = (props) => {
  const {
    figma_Data , 
    figmaUrl 
  } = props
  
  console.log(figma_Data);
  console.log(figmaUrl);
  return ( 
    <Card
    style={{
      width: 300,
      marginTop : 20,
      marginBottom : 20,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
      title="Card title"
      description="This is the description"
    />
  </Card>
    )
  }
export default Card_Card;
