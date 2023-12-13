import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 years professional experience</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">6 projects across both personal and professional work </span>
      </div>

      <div className="about__box">
      <iconify-icon class="bx about__icon" icon="grommet-icons:status-good"></iconify-icon>

        <h3 className="about__title">Status</h3>
        <span className="about__subtitle">looking for work</span>
      </div>
    </div>
  );
};

export default Info;
