import React from "react";
import "./aboutMe.css";
const AboutMe = () => {
  return (
    <div className="body">
      <header className="header">
        <div className="imgContainer">
          <img src="./images/avatar.jpg" />
        </div>
        <p>Hamza sorany</p>
      </header>
      <section className="experiences">
        <p>Experiences</p>
        <ul className="experiencesList">
          <li>
            professional :&nbsp;<span>frontend developer</span>&nbsp;
          </li>
          <li>
            language:
            {
              <ul>
                <li>Arabic : native</li>
                <li className="languageRate">
                  English :<span className="goodLanguage"></span>
                  <span className="goodLanguage"></span>
                  <span className="goodLanguage"></span>
                  <span className="badLanguage"></span>
                  <span className="badLanguage"></span>
                </li>
              </ul>
            }
          </li>
          <li>
            " programming languages: html,css,javascript,c++,java,c# "
            <br />
          </li>
          <li>
            libraries: react.js,redux.js,react-router,vue.js,materail-ui
            <br />
          </li>
          <li>
            git:
            <br />
            gitHub,gitLab
            <br />
          </li>
        </ul>
      </section>
      <section className="certificate">
        <p>Certificate</p>
        <ul>
          <li>middle school certificate:288.5/310</li>
          <li>Certificate of baccalaureate: 223.1/240</li>
          <li>
            at now : student in aleppo university information technology in the
            5th years
          </li>
        </ul>
      </section>
      <section className="skills">
        <p>Skills</p>
        <ul>
          <li>work in teams</li>
          <li>good searcher in google</li>
        </ul>
      </section>
      <section className="myWork">
        <p>My Work</p>
        <ul>
          <li>4th earys project:&nbsp;https://lnkd.in/e3xka5J</li>
          <li>a lot of mini project locally</li>
        </ul>
      </section>
      <section className="footer">
        <ul>
          <li>facebook : Hamza&nbsp;So</li>

          <li>linkedin : hamza sorany</li>
        </ul>
        <ul>
          <li>gmail : hso199899@gmail.com</li>
          <li>phon : +963935405851</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutMe;
