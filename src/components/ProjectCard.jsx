import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project }) => {
  const { imgSrc, title, desc } = project;

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="item">
      <a
        className="img-card text-center"
        data-bs-toggle="modal"
        data-bs-target="#product-modal"
        onClick={() => setShow(true)}
      >
        <img src={imgSrc} alt="product" className="img-fluid" />
        <h4>
          <span>{title}</span>
          {desc}
        </h4>
      </a>
      <ProjectModal show={show} handleClose={handleClose} project={project} />
    </div>
  );
};

export default ProjectCard;
