// Local dependencies
import style from '../styles/components/ContentGallery.module.scss';
import {NO_RESULTS_TEXT} from '../constants';

export default function ContentGallery({results}) {
  return (
    <section className={style.contentGallery}>
        {results?.length ? (
            <ul className={style.contentGallery__listItem}>
                {results.map((elem) => (
                    <li className={style.contentGallery__item} key={elem.id}>
                    <div>
                      <h4>{elem.name}</h4>
                      <p>{elem.episode}</p>
                      <p>{elem.air_date}</p>
                    </div>
                    </li>
                ))}
            </ul>
            ) : (
            <p>{NO_RESULTS_TEXT}</p>
        )}
    </section>
  )
}
