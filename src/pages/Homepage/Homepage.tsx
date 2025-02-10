import { useState } from 'react';
import { useSchedule } from '../../hooks/useSchedule';
import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Card/Card';
import { Loading } from '../../components/Loading';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Pagination } from '../../components/Pagination/Pagination';
import { TEXTS } from '../../constants/textConstants';
import cardImgAlt from '../../assets/card-alt-icon.png';

import styles from './Homepage.module.css';

/**
 * The Homepage page displays TV shows.
 *
 * @returns React Element
 */
export function Homepage(): React.ReactElement {
  const [page, setPage] = useState(1);
  const { schedule, isError, isLoading } = useSchedule(page);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;

  return (
    <>
      <Header />
      <section className={styles.homepageSection}>
        <h2>{TEXTS.sections.lastAddedShows}</h2>
        <div className={styles.showContainer}>
          {schedule.map((show, index) => (
            <Card
              id={show.id}
              key={index}
              title={show.name}
              season={show.season}
              rating={show.rating}
              imageUrl={show.image || cardImgAlt}
            />
          ))}
        </div>
        <Pagination currentPage={page} onPageChange={setPage} />
      </section>
    </>
  );
}
