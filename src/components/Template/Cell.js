import React from 'react';

const Cell = ({ data: { title, role, duration, image, invert, link, description } }) => (
  <div className="cell">
    <a href={link}>
      <section className="cell-title">
        {image ? <img src={image} className={'cell-icon' + (invert ? ' dark-invert' : '')} alt={title} /> : null}
        <div className="cell-header">
          <h2 className="underline">{title}</h2>
          {role && duration ? (
            <p className="cell-subtitle">
              {role}, {duration}
            </p>
          ) : null}
        </div>
      </section>
    </a>
    {description ? (
      <ul>
        {description.map((description, index) => {
          index++;
          return <li key={index}>{description}</li>;
        })}
      </ul>
    ) : null}
  </div>
);

export default Cell;
