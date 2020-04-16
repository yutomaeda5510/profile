import React from "react";
import { Typography, Layout, List } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;
const { Content } = Layout;

export const Works = () => (
  <Base>
    <WorksTitle level={3}>Works</WorksTitle>
    <div style={{ marginTop: "60px" }}>
      <a href="https://github.com/yutomaeda5510/profile">
        <ContactAvatar size={200} src={icon} />
        <p>profile</p>
      </a>
      <a href="https://qiita.com/yutomaeda5510/items/e3a2a9e89e0798afe97c">
        <p>読書メモ　パソコンの仕組みの絵本</p>
      </a>
    </div>
  </Base>
);