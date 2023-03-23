import React, { useState } from "react";
import { Button, Carousel, Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
const ProjectModal = ({ show, handleClose, project }) => {
  const { projectImgs } = project;
  return (
    <>
      <Modal
        show={show}
        onHide={() => handleClose()}
        // fullscreen={true}
        className="modal modal-width"
      >
        <Modal.Header>
          <button className="cross-btn" onClick={handleClose}>
            <FaTimes className="icon-black" />
          </button>
        </Modal.Header>

        <div className="modal-body">
          <div className="modal-title text-center">
            <h2 className="section-title">
              <span>Featured Design</span>
              {project.title}
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Carousel controls={true} interval={null}>
              {project.projectImgs.map((img) => {
                return (
                  <Carousel.Item>
                    <img
                      src={img}
                      alt="team modal image"
                      className="img-fluid modal-feat-img"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectModal;
