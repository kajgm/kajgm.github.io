import React from 'react';

const Cell = ({ data: { title, role, duration, image, invert, link, description } }) => (
  <div className="cell">
    <section className="cell-title">
      <a href={link}>
        {image ? <img src={image} className={'cell-icon' + (invert ? ' dark-invert' : '')} alt={title} /> : null}
      </a>
      <div className="cell-header">
        <a href={link}>
          <h2 className="underline">{title}</h2>
        </a>
        {role && duration ? (
          <h3>
            {role}, {duration}
          </h3>
        ) : null}
      </div>
    </section>

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
