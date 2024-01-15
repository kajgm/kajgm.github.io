import React from 'react';

const ExperienceCard = ({ data: { title, role, duration, image, website, description } }) => (
  <div className="content-container">
    <div className="exp-headers-container">
      <a href={website}>
        <img src={image} className="company-logos relative" alt="SAP" />
      </a>
      <div className="exp-headers-text">
        <h2 className="experience-headers">
          <a href={website} className="black-underline">
            {title}
          </a>
        </h2>
        <p className="work-duration-text no-margin">
          {role}, {duration}
        </p>
      </div>
    </div>
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

export default ExperienceCard;
