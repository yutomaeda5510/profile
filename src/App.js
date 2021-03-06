import React, { Component } from 'react';
import logo from './logo.svg';
import { Layout } from "antd";
import { Helmet } from "react-helmet";

//import Icon from './assets/images/icon.jpg';
//import Github01 from './assets/images/github01.png';

import MyHeader from "./components/Myheader/Myheader.js";
import MyFooter from "./components/Myfooter/Myfooter.js";

import "minireset.css";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{
            lang: "ja"
          }}
          title="ポートフォリオ"
          meta={[
            { charSet: "utf-8" },
            { name: "description", content: "ポートフォリオ Sample です" }
          ]}
        />
        <Layout>
          <MyHeader />
          <MyFooter />
        </Layout>
      </div>
    );
  }
}

export default App;
/*
function App() {
  return (
    <div>
      <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
      <header>
        <nav class="header-link">
          <div class="header-right">
            <a href="#profile">Profile</a>
            <a href="#skill">Skill</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" name="home">
        <div class="top-wrapper">
          <div class="header-name header-name-color">
            <h1><span>Yuto Maeda's portfolio</span></h1>
          </div>
        </div>
      </section>

      <section id="profile" name="profile">
        <div class="profile">
          <div class="container">
            <h2>Profile</h2>
            <div class="profile-row">
              <div class="profile-l">
                <img src={Icon} />
                <p>前田 優人 (26歳)<br />Maeda Yuto</p>
              </div>
              <div class="profile-r">
                <h3>読書＆ゲーム好き</h3>
                <p>
                  Webエンジニアを目指して勉強中です。
              <br />
              PythonとJavaScriptを勉強しています。
              <br />
              今後はReactに挑戦予定。
            </p>
                <div class="career-wrap">
                  <ul>
                    <p>経歴</p>
                    <li>2019年12月 プログラミンの勉強開始</li>
                    <li>2020年2月 同志社大学中退</li>
                    <li>現在 SEになる為、勉強中</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="profile-low"></div>

      <section id="skill" name="skill">
        <div class="skill">
          <div class="container">
            <h2>Skill</h2>
            <div class="skill-row">
              <div class="skill-l">
                <h4>Now study</h4>
                <ul>
                  <li>
                    <h5>HTML</h5>
                    <div class="bar">
                      <div class="comp"></div>
                      <div class="progress" style={{ width: "70%" }}></div>
                    </div>
                  </li>
                  <li>
                    <h5>CSS</h5>
                    <div class="bar">
                      <div class="comp"></div>
                      <div class="progress" style={{ width: "80%" }}></div>
                    </div>
                  </li>
                  <li>
                    <h5>Python</h5>
                    <div class="bar">
                      <div class="comp"></div>
                      <div class="progress" style={{ width: "60%" }}></div>
                    </div>
                  </li>
                  <li>
                    <h5>JavaScript</h5>
                    <div class="bar">
                      <div class="comp"></div>
                      <div class="progress" style={{ width: "90%" }}></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="skill-r">
                <h4>Hobby</h4>
                <ul>
                  <li>
                    <h5>スマブラsp</h5>
                    <div class="bar">
                      <div class="comp"></div>
                      <div class="progress" style={{ width: "3%" }}></div>
                    </div>
                  </li>
                  <li>
                    <h5>puzzle＆dragons</h5>
                    <div class="bar">
                      <div class="comp"></div>
                      <div class="progress" style={{ width: "1%" }}></div>
                    </div>
                  </li>
                  <li>
                    <h5>ボルダリング</h5>
                    <div class="bar">
                      <div class="comp"></div>
                      <div class="progress" style={{ width: "85%" }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" name="works">
        <div class="works">
          <div class="container">
            <h2>Works</h2>
            <div class="works-github-row">
              <h4>Github</h4>
              <div class="works-github-item">
                <a href="https://github.com/yutomaeda5510/profile" target="_blank">
                  <img style={{ width: "100%" }} src={Github01} />
                  <p>profile</p>
                </a>
              </div>
              <div class="works-github-item">
              </div>
              <div class="works-github-item">
              </div>
            </div>
            <div class="works-qiita">
              <h4>Qitta</h4>
              <ul>
                <li>
                  <a href="https://qiita.com/yutomaeda5510/items/e3a2a9e89e0798afe97c" target="_blank">
                    読書メモ パソコンの仕組みの絵本
              </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div class="contact-up"></div>

      <section id="contact" name="contact">
        <div class="contact">
          <div class="container">
            <h2>Contact</h2>
            <div class="contact-account">
              <a style={{ paddingRight: "10px", marginLeft: "auto" }} href="https://twitter.com/yutomaeda3" target="_blank">
                <p><i class="fab fa-twitter fa-5x"></i></p>
              </a>
              <a style={{ paddingLeft: "10px", marginRight: "auto" }} href="https://github.com/yutomaeda5510" target="_blank">
                <p><i class="fab fa-github fa-5x"></i></p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="copyrights">
        <div class="container">
          <p>&copy; Copyrights <strong>Yuto</strong>. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
*/

