import React from 'react';

import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

/**
 * Pagination component displays previous, next buttons and the current page number.
 *
 * @returns React Element
 */
export function Pagination({
  currentPage,
  onPageChange,
}: PaginationProps): React.ReactElement {
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
    </div>
  );
}
