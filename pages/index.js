// Framework dependencies
import Head from 'next/head';
import Image from 'next/image';
import parse from 'html-react-parser';

// Local dependencies
import Layout from '../components/layout';
import style from '../styles/views/Home.module.scss';
import {HOME_CONTENT, HOME_PAGE_TITLE} from '../constants';

export default function Main() {
  return (
    <Layout>
      <Head>
        <title>{HOME_PAGE_TITLE}</title>
      </Head>
      <section className={`grid ${style.home}`}>
        <div className={style.home__img}>
          <Image
            src={HOME_CONTENT.IMAGE}
            alt=""
            width={600}
            height={500}
            />
        </div>
      
        <div className={style.home__masthead}>
          {parse(HOME_CONTENT.TEXT)}
        </div>
      </section>
    </Layout>
  )
};