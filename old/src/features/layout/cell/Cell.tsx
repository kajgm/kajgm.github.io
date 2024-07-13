import styles from './Cell.module.scss';

type cellData = {
  title: string;
  role: string;
  duration: string;
  image: string;
  invert?: boolean;
  link: string;
  description?: string | string[];
  bulletpoints?: Array<string>;
  skills: Array<string>;
};

export function Cell({ title, role, duration, image, invert, link, description, bulletpoints, skills }: cellData) {
  let cellDescription, cellBulletPoints;

  if (description) {
    if (Array.isArray(description)) {
      cellDescription = (
        <div>
          {description.map((para: string, index: number) => {
            index++;
            return <p key={index}>{para}</p>;
          })}
        </div>
      );
    } else if (typeof description == 'string') {
      cellDescription = <p>{description}</p>;
    }
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
    <div className={styles.cell}>
      <div className={styles.cellTitle}>
        <a href={link}>
          {image ? (
            <img src={image} className={styles.cellIcon + ' ' + (invert ? styles.darkInvert : '')} alt={title} />
          ) : null}
        </a>
        <div className={styles.cellHeader}>
          <a href={link}>
            <h2 className="underline">{title}</h2>
          </a>
          {role && duration ? (
            <h3>
              {role}, {duration}
            </h3>
          ) : null}
        </div>
      </div>
      {cellDescription}
      {cellBulletPoints}
      <h3 className={styles.skills}>{'Relevant Skills: ' + skills.join(', ')}</h3>
    </div>
  );
}

export default Cell;
