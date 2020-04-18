import React from "react";
import { Typography, Layout } from "antd";
import styled from "styled-components";

import bg from "../../assets/images/back.JPG";

const { Title } = Typography;
const { Content } = Layout;

const Base = styled(Content)`
  width: 100%;
  height: 675px;
  text-align: center;
  background-attachment: relative;
  background-position: center center;
  background-image: url(${bg});
  background-size: cover;
`;

const TopTitle = styled.h1`
  padding-top: 160px;
  letter-spacing: 5px;
  text-shadow: 1px 1px 1px #000;
  font-size: 5em;
  color: #eee;
`;

export const Top = () => (
  <Base>
    <TopTitle>Yuto Maeda</TopTitle>
  </Base>
);