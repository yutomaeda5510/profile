import React from "react";
import { Typography, Layout, Progress, Row, Col } from "antd";
import styled from "styled-components";

const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;

const Base = styled(Content)`
  margin: 30px auto;
  padding: 120px 300px;
`;

const SkillTitle = styled(Title)`
  letter-spacing: 4px;
  font-size: 18px;
  border-left: solid 5.5px #333;
  padding: 0 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0;
  margin: 22px 0 44px 0;
`;

const SkillText = styled(Text)`
  letter-spacing: 2px;
`;

const SkillRow = styled(Row)`
  padding: 20px;
`;

const SkillCol = styled(Col)`
  padding: 20px 30px;
`;

export const Skill = () => (
  <Base>
    <SkillTitle level={2}>SKILL</SkillTitle>
    <SkillRow>
      <SkillCol xs={{ span: 24 }} lg={{ span: 12 }}>
        <Paragraph underline>Now Study</Paragraph>
        <SkillText>HTML</SkillText>
        <Progress percent={30} />
        <SkillText>CSS</SkillText>
        <Progress percent={25} />
        <SkillText>Python</SkillText>
        <Progress percent={40} />
        <SkillText>JavaScript</SkillText>
        <Progress percent={30} status="active" />
      </SkillCol>
      <SkillCol xs={{ span: 24 }} lg={{ span: 12 }}>
        <Paragraph underline>Hobby</Paragraph>
        <SkillText>スマブラsp</SkillText>
        <Progress percent={97} />
        <SkillText>puzzle&dragons</SkillText>
        <Progress percent={99} />
        <SkillText>ボルダリング</SkillText>
        <Progress percent={15} />
      </SkillCol>
    </SkillRow>
  </Base>
);