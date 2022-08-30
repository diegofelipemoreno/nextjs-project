// Framework dependencies
import React from "react";
import Head from 'next/head';

// Local dependencies
import Layout from '../../components/layout';
import Pagination from '../../components/pagination';
import style from '../../styles/views/Episode.module.scss';
import ContentGallery from '../../components/content-gallery';
import { getEpisodePaths, getEpisodesByPage } from '../../lib/service';
import { EPISODE_PAGE_TITLE } from '../../constants';

export async function getStaticPaths() {
    const paths = await getEpisodePaths();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const {id} = params;
    const {body} = await getEpisodesByPage(id);
    const {results, info} = await body;

    return {
      props: {
        pages: info.pages,
        data: results,
        pageId: id
      },
    };
}

export default function Episode({ data, pages, pageId }) {
    const paginationConfig = () => {
      const config = [];

      for (let index = 1; index <= pages; index++) {
        config.push({id: index, url: `/episode/${index}`});
        
      }

      return config;
    }

    return (
      <Layout>
         <Head>
            <title>{EPISODE_PAGE_TITLE}</title>
        </Head>
        <section className={`grid ${style.episode}`}>
          <div className={style.episode__paginationWrapper}>
            <Pagination
              config={paginationConfig()}
              pageId={pageId}
            />
          </div>
          <div className={style.episode__galleryWrapper}>
            <ContentGallery
            results={data}
            />
          </div>
        </section>
      </Layout>
    );
  }