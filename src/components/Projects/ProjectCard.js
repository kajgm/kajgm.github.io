import React from 'react';

const ProjectCard = ({ data: { title, link, description } }) => (
  <div className="content-container">
    <h2 className="project-headers no-margin">
      <a href={link} className="black-underline">
        {title}
      </a>
    </h2>
    {description ? (
      <ul>
        <p className="bullet-text two-fade-in no-margin">
          {description.map((description) => (
            <li key={description}>{description}</li>
          ))}
        </p>
      </ul>
    ) : null}
  </div>
);

export default ProjectCard;
