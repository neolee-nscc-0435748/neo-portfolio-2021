import React from "react";

import "./ResumeDetail.css";

function ResumeDetail() {
  return (
    <div>
      <br />
      {/* key skills */}
      <table id="tbl_key_skills">
        <thead>
          <tr>
            <th colSpan="2">
              <h2 className="h2_resume">Key Skills</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td_ks_1">
              Fast Learner&nbsp;
              <span>{"\u23EA"}</span>
            </td>
            <td className="td_ks_2">
              <span>{"\u23E9"}</span>
              &nbsp;Strong Decision Maker
            </td>
          </tr>
          <tr>
            <td className="td_ks_1">
              Complex Problem Solver&nbsp;
              <span>{"\u23EA"}</span>
            </td>
            <td className="td_ks_2">
              <span>{"\u23E9"}</span>
              &nbsp;Dedicated / Hard worker
            </td>
          </tr>
          <tr>
            <td className="td_ks_1">
              Fluent English & Korean&nbsp;
              <span>{"\u23EA"}</span>
            </td>
            <td className="td_ks_2">
              <span>{"\u23E9"}</span>
              &nbsp;Many experiences in business field
            </td>
          </tr>
        </tbody>
      </table>
      {/* Technical skills */}
      <table id="tbl_technical_skills">
        <thead>
          <tr>
            <th colSpan="2">
              <h2 className="h2_resume">Technical Skills</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td_ts_1">Operating Systems</td>
            <td className="td_ts_2">
              <span>{"\u23FA"}</span>
              &nbsp;Windows 95-XP, NT, and 7/10 and Linux(Unbuntu, Kali)
            </td>
          </tr>
          <tr>
            <td className="td_ts_1">Programming Languages</td>
            <td className="td_ts_2">
              <span>{"\u23FA"}</span>
              &nbsp;Javascript, HTML5, CSS3, PHP, Dart, Java, C, C++, C#, JSON, REST API and SQL
            </td>
          </tr>
          <tr>
            <td className="td_ts_1">Framework & SDK</td>
            <td className="td_ts_2">
              <span>{"\u23FA"}</span>
              &nbsp;Nodejs, Flutter, React, Laravel, .Net Core, Electron, jQuery and Bootstrap
            </td>
          </tr>
          <tr>
            <td className="td_ts_1">Databases</td>
            <td className="td_ts_2">
              <span>{"\u23FA"}</span>
              &nbsp;MongoDB, MySQL(MariaDB), SQLite, Firebase and Oracle
            </td>
          </tr>
          <tr>
            <td className="td_ts_1">Tools & IDE</td>
            <td className="td_ts_2">
              <span>{"\u23FA"}</span>
              &nbsp;VSCode, IntelliJ, PhpStorm, WebStorm, Inkscape, Visio, Drawio and Invision
            </td>
          </tr>
          <tr>
            <td className="td_ts_1">Internet</td>
            <td className="td_ts_2">
              <span>{"\u23FA"}</span>
              &nbsp;Internet Explorer, and Chrome
            </td>
          </tr>
          <tr>
            <td className="td_ts_1">Office Applications</td>
            <td className="td_ts_2">
              <span>{"\u23FA"}</span>
              &nbsp;Microsoft office suite (Word, Excel, and PowerPoint)
            </td>
          </tr>
          <tr>
            <td className="td_ts_1">Others</td>
            <td className="td_ts_2">
              <span>{"\u23FA"}</span>
              &nbsp;Scrum(Agile), GitHub, MVC, AWS, Heroku, Azure and Docker
            </td>
          </tr>
        </tbody>
      </table>
      {/* Education */}
      <table id="tbl_education">
        <thead>
          <tr>
            <th colSpan="2">
              <h2 className="h2_resume">Education</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">
              <h4 className="h4_resume">IN PROGRESS: IT WEB Programming / NSCC IT Campus, Halifax</h4>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <h5 className="h5_resume">Second Year</h5>
            </td>
          </tr>
          <tr>
            <td className="td_ed_1">
              <p>---&lt; Fall 2020 &gt;---</p>
              <ul>
                <li>Full Stack Programming (RESTful, React, NoSQL, Heroku)</li>
                <li>Web Application Programming (PHP, Laravel, MySQL, AWS)</li>
                <li>Electron (Bootstrap, jQuery, Knex, SQLite)</li>
                <li>Web Design Fundamentals (Web design, Graphic design, Style guides, Accessibility, Inkscape)</li>
                <li>Project Management (Documentation, Agile, SCRUM, SDLC, WBS, Change Control, Closure)</li>
              </ul>
            </td>
            <td className="td_ed_2">
              <p>---&lt; Winter 2021 (Present) &gt;---</p>
              <ul>
                <li>Web Application Programming (.Net Core, Azure, AWS, Docker, Serverless)</li>
                <li>Web Application Security (Kali Linux, OWASP, ZAP)</li>
                <li>Capstone (Web chat, Firebase, React, Bootstrap, Hook)</li>
                <li>Javascript Game Programming (Canvas, Phaser 3, TexturePacker)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <h5 className="h5_resume">&nbsp;</h5>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <h5 className="h5_resume">First Year</h5>
            </td>
          </tr>
          <tr>
            <td className="td_ed_1">
              <p>---&lt; Fall 2019 &gt;---</p>
              <ul>
                <li>Logic and Programming (Javascript)</li>
                <li>Website Development (HTML5, CSS3)</li>
                <li>Data fundamentals (Database, SQL)</li>
                <li>Introduction to Windows Administration (Windows 10 Pro)</li>
                <li>Introduction to Networking and Security (CCENT)</li>
              </ul>
            </td>
            <td className="td_ed_2">
              <p>---&lt; Winter 2020 &gt;---</p>
              <ul>
                <li>User Interface Design and Development (UML)</li>
                <li>Operating Systems (Linux)</li>
                <li>Web Server Fundamentals (Apache, IIS, Tomcat)</li>
                <li>Object Oriented Programming (Java)</li>
                <li>Client side programming (PHP)</li>
                <li>Systems analysis and design (AD)</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResumeDetail;
