// Framework dependencies
import Image from 'next/image';

// Local dependencies
import style from '../styles/components/CardGallery.module.scss';
import {NO_RESULTS_TEXT} from '../constants';

export default function CardGallery({results, title}) {

  return (
    <section className={style.cardGallery}>
        <h3>{title}</h3>
        {results?.length ? (
            <ul className={style.cardGallery__listItem}>
                {results.map((elem) => (
                    <li className={style.cardGallery__item} key={elem.id}>
                    <div>
                      <h4>{elem.name}</h4>
                      <p>{elem.gender}</p>
                      <p>{elem.species}</p>
                      <p>{elem.status}</p>
                    </div>
                    {elem?.image ? (
                        <Image
                        src={elem.image}
                        alt="profile"
                        width={600}
                        height={500}
                        />
                      ) : (
                       <></>
                      )}
                    </li>
                ))}
            </ul>
            ) : (
            <p>{NO_RESULTS_TEXT}</p>
        )}
    </section>
  )
}
