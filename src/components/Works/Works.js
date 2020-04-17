import React from "react";
import { Typography, Layout, List, Avatar } from "antd";
import styled from "styled-components";

import Github01 from "../../assets/images/github01.png";

const { Title, Text } = Typography;
const { Content } = Layout;

const Base = styled(Content)`
  margin-top: 60px;
  width: 100%;
  min-height: 500px;
  text-align: center;
`;

const WorksTitle = styled(Title)`
  letter-spacing: 4px;
`;

const WorksImages01 = styled(Avatar)`
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const Works = () => (
  <Base>
    <WorksTitle level={3}>Works</WorksTitle>
    <div style={{ marginTop: "60px" }}>
      <a href="https://github.com/yutomaeda5510/profile">
        <WorksImages01 size={200} src={Github01} />
        <p>profile</p>
      </a>
      <a href="https://qiita.com/yutomaeda5510/items/e3a2a9e89e0798afe97c">
        <p>読書メモ　パソコンの仕組みの絵本</p>
      </a>
    </div>
  </Base>
);