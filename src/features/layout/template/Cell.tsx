import React from 'react';
import { List, Paragraph } from '@features/layout';

type cellData = {
  title: string;
  role: string;
  duration: string;
  image: string;
  invert?: boolean;
  link: string;
  description: { type: string; content: any };
  skills: Array<string>;
};

export function Cell({ title, role, duration, image, invert, link, description, skills }: cellData) {
  let cellDescription;

  if (description && description.type) {
    if (description.type == 'list') {
      cellDescription = <List content={description.content} />;
    } else if (description.type == 'paragraph') {
      cellDescription = <Paragraph content={description.content} />;
    }
  } else {
    cellDescription == null;
  }

  return (
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

      {cellDescription}

      <h3 className="skills">{'Relevant Skills: ' + skills.join(', ')}</h3>
    </div>
  );
}

export default Cell;
