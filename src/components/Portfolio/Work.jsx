import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section class="work section" id="portfolio">
      <h2 class="section__title">Portfolio</h2>
      <span class="section__subtitle">Most recent work (Due to Non Disclosure agreements, many of the projects i work on cannot be displayed here)</span>

      <Works />
    </section>
  );
};

export default Work;
