import { Logo } from 'features/ui';
import { linksData } from 'data/links';
import styles from './Links.module.scss';

type socialType = {
  title: string;
  link: string;
  image: string;
};

export function Links() {
  return (
    <div className={styles.links}>
      <Logo>KGM</Logo>
      <div>
        {linksData.map((social: socialType) => (
          <a key={social.link} href={social.link}>
            <img
              key={social.title}
              src={social.image}
              className={styles.socialIcon + ' ' + styles.darkInvert}
              alt={social.title}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
