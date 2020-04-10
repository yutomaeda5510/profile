import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Menu, Icon, Layout } from "antd";

import styled from "styled-components";

import { Top } from "../Top/Top";
import { Profile } from "../Profile/Profile";
import { Skill } from "../Skill/Skill";
import { Works } from "../Works/Works";
import { Contact } from "../Contact/Contact";

const { Header } = Layout;

const Base = styled(Header)`
  text-align: center;
  background: #f0f2f5;
`;

const HeaderMenu = styled(Menu)`
  line-height: 64px;
  background: #f0f2f5;
`;

class MyHeader extends React.Component {
  state = {
    current: "top"
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Router>
        <Base>
          <HeaderMenu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="top">
              <Link to="/">
                <Icon type="user" />
                Top
              </Link>
            </Menu.Item>
            <Menu.Item key="profile">
              <Link to="/profile">
                <Icon type="monitor" />
                Profile
              </Link>
            </Menu.Item>
            <Menu.Item key="skill">
              <Link to="/skill">
                <Icon type="solution" />
                Skill
              </Link>
            </Menu.Item>
            <Menu.Item key="works">
              <Link to="/works">
                <Icon type="shopping" />
                Works
              </Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to="/contact">
                <Icon type="mail" />
                Contact
              </Link>
            </Menu.Item>
          </HeaderMenu>
        </Base>
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/skill" exact component={Skill} />
          <Route path="/works" exact component={Works} />
          <Route path="/contact" exact component={Contact} />
          <Route exact component={Top} />
        </Switch>
      </Router>
    );
  }
}

export default MyHeader;