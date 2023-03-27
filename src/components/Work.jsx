import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "./ProjectCard";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button className=" arrow-right" onClick={() => onClick()}>
      <AiOutlineRight className="icon" />
    </button>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button className="arrow-left" onClick={() => onClick()}>
      <AiOutlineLeft className="icon" />
    </button>
  );
};

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
          <Carousel
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            responsive={responsive}
            // infinite={true}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="img-card-item"
          >
            {projects.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
          </Carousel>
        </div>
      </div>
      <div id="process"></div>
    </section>
  );
};

export default Work;
