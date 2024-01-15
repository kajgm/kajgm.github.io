import React from 'react';

const Cell = ({ data: { title, role, duration, image, link, description } }) => (
  <div className="content-container">
    <div className="exp-headers-container">
      {image ? (
        <a href={link}>
          <img src={image} className="company-logos relative" alt={title} />
        </a>
      ) : null}
      <div className="exp-headers-text">
        <h2 className="experience-headers">
          <a href={link} className="black-underline">
            {title}
          </a>
        </h2>
        {role && duration ? (
          <p className="work-duration-text no-margin">
            {role}, {duration}
          </p>
        ) : null}
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

export default Cell;