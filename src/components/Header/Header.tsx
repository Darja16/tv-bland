import { TEXTS } from '../../constants/textConstants';

import styles from './Header.module.css';

/**
 * A component that renders the header of the application
 *
 * @returns React Element
 */
export function Header(): React.ReactElement {
  return (
    <header className={styles.header}>
      <h1>{TEXTS.header.title}</h1>
      <p>{TEXTS.header.subtitle}</p>
      <p>{TEXTS.header.description}</p>
    </header>
  );
}
