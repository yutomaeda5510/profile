import React from "react";
import { Typography, Layout } from "antd";
import styled from "styled-components";

const { Text } = Typography;
const { Footer } = Layout;

const Base = styled(Footer)`
  text-align: center;
  padding: 16px 0;
`;

class MyFooter extends React.Component {
  render() {
    return (
      <Base>
        <Text>
          &copy; Copyrights <strong>Yuto</strong>. All Rights Reserved
        </Text>
      </Base>
    );
  }
}

export default MyFooter;