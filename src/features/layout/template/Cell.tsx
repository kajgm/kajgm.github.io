type cellData = {
  title: string;
  role: string;
  duration: string;
  image: string;
  invert?: boolean;
  link: string;
  description?: string;
  bulletpoints?: Array<string>;
  skills: Array<string>;
};

export function Cell({ title, role, duration, image, invert, link, description, bulletpoints, skills }: cellData) {
  let cellDescription, cellBulletPoints;
  console.log(title);

  if (description) {
    cellDescription = <p>{description}</p>;
  }
  if (bulletpoints) {
    cellBulletPoints = (
      <ul>
        {bulletpoints.map((description: string, index: number) => {
          index++;
          return <li key={index}>{description}</li>;
        })}
      </ul>
    );
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
      {cellBulletPoints}
      <h3 className="skills">{'Relevant Skills: ' + skills.join(', ')}</h3>
    </div>
  );
}

export default Cell;
