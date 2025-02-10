import { useParams, useNavigate } from 'react-router-dom';
import { useShowDetails } from '../../hooks/useShowDetails';
import { Loading } from '../../components/Loading';
import { ErrorMessage } from '../../components/ErrorMessage';
import { InfoSection } from '../../components/InfoSection';
import { TEXTS } from '../../constants/textConstants';
import cardImgAlt from '../../assets/card-alt-icon.png';

import styles from './DetailPage.module.css';

/**
 * DetailPage component displays detailed information about a specific TV show.
 *
 * @returns {React.ReactElement} The rendered DetailPage component.
 */
export function DetailPage(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { showDetails, isLoading, isError } = useShowDetails(id!);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;

  const INFO_SECTION_COLUMN_1 = [
    {
      label: 'Streamed on',
      context: showDetails?.network?.name || 'N/A',
    },
    {
      label: 'Schedule',
      context: showDetails?.schedule?.days?.join(', ') || 'N/A',
    },
    { label: 'Status', context: showDetails?.status || 'N/A' },
    {
      label: 'Genres',
      context: showDetails?.genres?.join(', ') || 'N/A',
    },
  ];

  const INFO_SECTION_COLUMN_2 = [
    { label: 'Type', context: showDetails?.type || 'N/A' },
    { label: 'Language', context: showDetails?.language || 'N/A' },
    { label: 'Runtime', context: showDetails?.runtime?.toString() || 'N/A' },
  ];

  return (
    <div className={styles.detailPage}>
      <header>
        <h1>{TEXTS.header.title}</h1>
        <button
          className={`${styles.button} ${styles.secondaryButton}`}
          onClick={() => navigate('/')}
        >
          Back to Main Page
        </button>
      </header>

      <main className={styles.mainSection}>
        <img
          src={showDetails?.image?.medium || cardImgAlt}
          alt={showDetails?.name}
          className={styles.showImage}
        />
        <div className={styles.mainInfo}>
          <p className={styles.rating}>
            ⭐ {showDetails?.rating?.average || 'No ratings yet'}
          </p>
          <h1>{showDetails?.name}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: showDetails?.summary || 'No description available.',
            }}
          />
        </div>
      </main>
      <section className={styles.infoSectionContainer}>
        <InfoSection title="Show Info" data={INFO_SECTION_COLUMN_1} />
        <InfoSection title="Other" data={INFO_SECTION_COLUMN_2} />
      </section>
    </div>
  );
}
