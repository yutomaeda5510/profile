import React from "react";
import { Typography, Layout, Avatar } from "antd";
import styled from "styled-components";

import icon from "../../assets/images/icon.jpg";

const { Title } = Typography;
const { Content } = Layout;

const Base = styled(Content)`
  margin-top: 60px;
  width: 100%;
  min-height: 600px;
  text-align: center;
`;

const ContactAvatar = styled(Avatar)`
  margin-top: 60px;
  margin-bottom: 20px;
`;

const ContactTitle = styled(Title)`
  letter-spacing: 4px;
`;

export const Contact = () => (
  <Base>
    <ContactTitle level={3}>Contact</ContactTitle>
    <div style={{ marginTop: "60px" }}>
      <a href="https://twitter.com/yutomaeda3">
        <ContactAvatar size={256} src={icon} />
      </a>
      <a href="https://twitter.com/yutomaeda3">
        <p>Twitter</p>
      </a>
      <a href="https://github.com/yutomaeda5510">
        <p>Github</p>
      </a>
    </div>
  </Base>
);
