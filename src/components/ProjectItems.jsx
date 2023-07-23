import React from "react";
import ProjectCardItem from "./ProjectCardItem";
import "./ProjectItems.css";

import img_ionic from "../assets/images/img-ionic.jpg";
import img_netcore from "../assets/images/img-netcore.jpg";
import img_nsccchat from "../assets/images/img-nsccchat.jpg";
import img_fullstack from "../assets/images/img-fullstack.jpg";
import img_laravel from "../assets/images/img-laravel.jpg";

function ProjectItems() {
  return (
    <div className="cards">
      <h1>Check out my work samples!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ProjectCardItem
              src={img_ionic}
              text1="Ionic, React, API Documentation, Render"
              text2="Develop a mobile app using Ionic with React and how to use serverless functions"
              label="Ionic with React"
              path="https://course-map.neoapps.ca/"
              git_path="https://github.com/NeoLee-0435748/nscc-course-map-with-ionic"
            />
            <ProjectCardItem
              src={img_netcore}
              text1=".Net Core, Azure Severless functions, SQL Server->MySql, Azure cloud service->Heroku"
              text2="Develop a web service using .Net Core with My SQL"
              label=".Net Core"
              path="https://nscc-course-map-with-csharp.herokuapp.com/Courses"
              git_path="https://github.com/NeoLee-0435748/nscccoursemap-dotnetcore"
            />
          </ul>
          <ul className="cards__items">
            <ProjectCardItem
              src={img_nsccchat}
              text1="React, React Hooks, Firebase, Invision, Teamwork, Scrum"
              text2="Develop a web chat service using React with Firebase and how to co-operate with the team members"
              label="Capstone Project"
              path="https://nscc-chat.web.app"
              git_path="https://github.com/benshewan/Capstone-Project"
            />
            <ProjectCardItem
              src={img_fullstack}
              text1="React, Express, MongoDB, RESTful API, Postman"
              text2="Develop a web service using React with Express and how to combine front-end and back-end services"
              label="Full Stack"
              path="https://fullstack.neoapps.ca/"
              git_path="https://github.com/NeoLee-0435748/FullStackApp"
            />
          </ul>
          <ul>
            <ProjectCardItem
              src={img_laravel}
              text1="Laravel, PHP, Axios, Bootstrap, MySql"
              text2="Develop a web service using Laravel with Bootstrap and how to present web page using server side language"
              label="Laravel"
              path="https://socialmediafeed.neoapps.ca/"
              git_path="https://github.com/NeoLee-0435748/SocialMediaFeed"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectItems;
