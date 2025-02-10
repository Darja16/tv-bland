import styles from './InfoSection.module.css';

interface InfoItem {
  label: string;
  context: string;
}

interface InfoSectionProps {
  title: string;
  data: InfoItem[];
}

export function InfoSection({
  title,
  data,
}: InfoSectionProps): React.ReactElement {
  return (
    <div className={styles.infoSection}>
      <h2 className={styles.title}>{title}</h2>
      {data.map((item, index) => (
        <div key={index} className={styles.infoItem}>
          <span>
            <p className={styles.label}>{item.label}</p>
            <p className={styles.context}>{item.context}</p>
          </span>
          {index !== data.length - 1 && <hr className={styles.separator} />}
        </div>
      ))}
    </div>
  );
}
