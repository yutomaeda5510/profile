import React from "react";
import { Typography, Layout, List, Avatar, Card, Row, Col } from "antd";
import styled from "styled-components";

import Github01 from "../../assets/images/github01.png";
import icon from "../../assets/images/icon.jpg";

const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;
const { Meta } = Card;

const Base = styled(Content)`
  margin: 0px auto 30px auto;
  padding: 120px 300px;
`;

const WorksTitle = styled(Title)`
  letter-spacing: 4px;
  font-size: 18px;
  border-left: solid 5.5px #333;
  padding: 0 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0;
  margin: 22px 0 44px 0;
`;

const CardWrap = styled.div`
  padding: 40px 30px;
`;

const data = [
  {
    url: 'https://qiita.com/yutomaeda5510/items/e3a2a9e89e0798afe97c',
    title: '読書メモ パソコンの仕組みの絵本',
  },
  {
    url: 'https://qiita.com/yutomaeda5510/items/678bf450b0b856a65926',
    title: 'redux-form で Warning: Cannot update a component from inside the function body of a different component.',
  },
];

export const Works = () => (
  <Base>
    <WorksTitle level={3}>Works</WorksTitle>
    <Paragraph underline>Github</Paragraph>
    <CardWrap>
      {/* <Row> */}
      {/* <Col xs={{ span: 24 }} lg={{ span: 24 }}> */}
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="" src={Github01} />}
      >
        <Meta title="profile" />
      </Card>
      {/* </Col> */}
      {/* </Row> */}
    </CardWrap>
    <Paragraph underline>Qiita</Paragraph>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={icon} />}
            title={<a href={item.url}>{item.title}</a>}
          />
        </List.Item>
      )}
    />
  </Base >
);