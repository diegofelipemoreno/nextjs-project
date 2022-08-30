// Framework dependencies
import React from 'react';
import Link from "next/link";

// Local dependencies
import style from '../styles/components/Pagination.module.scss';

const Pagination = ({config, pageId}) => {

  return (
    <nav className={style.pagination}>
      <ul className={style.pagination__listItem}>
        {config?.map(({id, url}) => (
          <li key={id} className={style.pagination__item}>
            {parseInt(id) === parseInt(pageId) ? (
                <span>{id}</span>
            ) : (
                <Link href={url}>
                    <a>{id}</a>
                </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;