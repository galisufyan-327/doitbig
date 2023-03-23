import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCard";

const Work = () => {
  const projects = [
    {
      imgSrc: "images/projects/rabobank.png",
      title: "Rabobank",
      desc: "We helped Rabobank develop their new version of the website & mobile app, which increased user activity.",
      projectImgs: [
        "images/projects/rabobank1.png",
        "images/projects/rabobank2.png",
      ],
    },
    {
      imgSrc: "images/projects/mobile-app.png",
      title: "Medclick",
      desc: "AI based blockchain secured online platform that connects patients, doctors, and allied health professionals.",
      projectImgs: [
        "images/projects/medclick1.png",
        "images/projects/medclick2.png",
      ],
    },
    {
      imgSrc: "images/projects/frame.png",
      title: "CodingLab",
      desc: "Dutch Freelance platform. Using this platform clients can hire IT professionals.",
      projectImgs: [
        "images/projects/codinglab1.png",
        "images/projects/codinglab2.png",
      ],
    },
  ];
  return (
    <section className="projects section-gap grey-bg">
      <div className="container">
        <h2 className="section-title text-center">Featured Projects</h2>
      </div>

      <div className="project-showcase">
        <div className="projects-carousel cards-wrapper">
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </div>
      <div id="process"></div>
    </section>
  );
};

export default Work;
