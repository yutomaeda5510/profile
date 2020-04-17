import React from "react";
import { Typography, Layout, Avatar, List } from "antd";
import styled from "styled-components";

import Icon from "../../assets/images/icon.jpg";

const { Title, Text } = Typography;
const { Content } = Layout;

const Base = styled(Content)`
  margin-top: 60px;
  width: 100%;
  min-height: 700px;
  text-align: center;
`;
const ProfileTitle = styled(Title)`
  letter-spacing: 4px;
`;
const ProfileAvatar = styled(Avatar)`
  margin-top: 60px;
  margin-bottom: 20px;
`;

const career = [
  "2019年12月　プログラミングの勉強開始",
  "2020年3月　同志社大学理工学部中退",
  "現在 SEになる為、勉強中"
];

export const Profile = () => (
  <Base>
    <ProfileTitle level={3}>PROFILE</ProfileTitle>
    <ProfileAvatar size={240} src={Icon} />
    <br />
    <Text>前田 優人 (26歳)</Text>
    <br />
    <Text>読書＆ゲーム好き</Text>
    <br />
    <Text>Webエンジニアを目指して勉強中です。</Text>
    <br />
    <Text>PythonとJavaScriptを勉強しています。</Text>
    <div style={{ marginTop: "20px" }}>
      <Title level={4}>経歴</Title>
      <List
        bordered
        dataSource={career}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
  </Base>
);
