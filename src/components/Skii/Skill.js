import React from "react";
import { Typography, Layout, Progress } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;
const { Content } = Layout;

const Base = styled(Content)`
  margin-top: 60px;
  width: 100%;
  min-height: 500px;
  text-align: center;
`;

const SkillTitle = styled(Title)`
  letter-spacing: 4px;
`;

export const Skill = () => (
  <Base>
    <SkillTitle level={3}>SKILL</SkillTitle>
    ReactDOM.render(
    <div>
      <br />
      <Text>HTML</Text>
      <Progress percent={30} />
      <br />
      <Text>CSS</Text>
      <Progress percent={25} />
      <br />
      <Text>Python</Text>
      <Progress percent={40} />
      <br />
      <Text>JavaScript</Text>
      <Progress percent={30} status="active" />
      <br />
      <Text>スマブラsp</Text>
      <Progress percent={97} />
      <br />
      <Text>puzzle&dragons</Text>
      <Progress percent={99} />
      <br />
      <Text>ボルダリング</Text>
      <Progress percent={15} />
    </div>,
  mountNode,
);
  </Base>
);