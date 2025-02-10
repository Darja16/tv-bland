import { Link } from 'react-router-dom';
import styles from './Card.module.css';

interface CardProps {
  id: number;
  title: string;
  season: number;
  imageUrl: string;
  rating: number | null;
}

export function Card({
  id,
  title,
  season,
  imageUrl,
  rating,
}: CardProps): React.ReactElement {
  return (
    <Link to={`/show-detail/${id}`} className={styles.card}>
      <div className={styles.imagePlaceholder}>
        {imageUrl ? (
          <img
            src={imageUrl}
            srcSet={`${imageUrl} 2x`}
            alt={`Poster of ${title}`}
            className={styles.image}
            loading="lazy"
          />
        ) : (
          <span className={styles.imageFallback}>🖼️</span>
        )}
      </div>
      <div className={styles.details}>
        <p className={styles.season}>Season {season}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.rating}>⭐ {rating || 'No ratings yet'}</p>
      </div>
    </Link>
  );
}
