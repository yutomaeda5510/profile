import React from "react";
import { Typography, Layout, Avatar } from "antd";
import styled from "styled-components";
import {
  TwitterOutlined,
  GithubOutlined
} from "@ant-design/icons";

import icon from "../../assets/images/icon.jpg";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const Base = styled(Content)`
  margin: 0px auto 30px auto;
  padding: 120px 300px;
`;

const ContactAvatar = styled(Avatar)`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const ContactTitle = styled(Title)`
  letter-spacing: 4px;
  font-size: 18px;
  border-left: solid 5.5px #333;
  padding: 0 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0;
  margin: 22px 0 44px 0;
`;

const ContactParagraph = styled(Paragraph)`
  font-size: 18px;
`;

export const Contact = () => (
  <Base>
    <ContactTitle level={3}>Contact</ContactTitle>
    <div style={{ marginTop: "60px" }}>
      <a href="https://twitter.com/yutomaeda3">
        <ContactAvatar size={200} src={icon} />
      </a>
    </div>
    <div style={{ textAlign: "center" }}>
      <a href="https://twitter.com/yutomaeda3">
        <ContactParagraph>
          <TwitterOutlined />
          Twitter
        </ContactParagraph>
      </a>
      <a href="https://github.com/yutomaeda5510">
        <ContactParagraph>
          <GithubOutlined />
          Github
        </ContactParagraph>
      </a>
    </div>
  </Base >
);
