import React from "react";
import { Typography, Layout, Avatar, List } from "antd";
import styled from "styled-components";

import Icon from "../../assets/images/icon.jpg";

const { Title, Text } = Typography;
const { Content } = Layout;

const Base = styled(Content)`
  margin: 0px auto 30px auto;
  padding: 120px 300px;
`;
const ProfileTitle = styled(Title)`
  letter-spacing: 4px;
  font-size: 18px;
  border-left: solid 5.5px #333;
  padding: 0 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0;
  margin: 22px 0 44px 0;
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
    <ProfileAvatar size={200} src={Icon} />
    <br />
    <Text>前田 優人 (26歳)</Text>
    <br />
    <Text>読書＆ゲーム好き</Text>
    <br />
    <Text>Webエンジニアを目指して勉強中です。</Text>
    <br />
    <Text>PythonとJavaScriptを勉強しています。</Text>
    <div style={{ marginTop: "30px" }}>
      <Title level={4}>経歴</Title>
      <List
        bordered
        dataSource={career}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
  </Base>
);
