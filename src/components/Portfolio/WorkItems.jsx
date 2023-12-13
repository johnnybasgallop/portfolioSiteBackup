import React, { useState } from 'react';
import PopupModal from './PopupModal';

const WorkItems = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const projectDetails = {
    title: item.title,
    imageUrl: item.image,
    technologies: item.technologies,
    description: item.description,
    githubLink: item.githubLink,
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.CoverImage} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <button className="work__button" onClick={openModal}>
        Learn More
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </button>

      {isModalOpen && (
        <PopupModal
          onClose={closeModal}
          title={projectDetails.title}
          imageUrl={projectDetails.imageUrl}
          technologies={projectDetails.technologies}
          description={projectDetails.description}
          githubLink={projectDetails.githubLink}
        />
      )}
    </div>
  );
};

export default WorkItems;