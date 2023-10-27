import CommandLink from 'src/assets/CommandLink.webp';
import { URI } from 'src/data/uri';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <a href={URI.commandLink} target='_blank' rel='noopener noreferrer'>
        <img src={CommandLink} alt='CommandLink' />
      </a>
      <a
        href='https://stevendu.vercel.app/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Steven Du
      </a>
    </div>
  );
};

export default Header;
