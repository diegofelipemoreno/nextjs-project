// Framework dependencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Head from 'next/head';
import { useSession } from 'next-auth/react';

// Local dependencies
import styles from '../styles/components/Layout.module.scss';
import Header from './header';
import Footer from './footer';
import AccessDenied from './access-denied';
import { setUserState } from '../reducers/userSlice';
import { setAuthState, selectAuthState } from '../reducers/authSlice';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children }) {
  const authState = useSelector(selectAuthState);
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(setUserState({ ...session.user }));
      dispatch(setAuthState(true));
    }
  }, [dispatch, session]);

  return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Rick and Morty"
          />
          <meta name="og:title" content="Rick and Morty APP" />
        </Head>
        <Header/>
        <main>
          {authState ? (
            children
          ):
            <AccessDenied/>
          }
        </main>
        <Footer/>
      </div>
  );    
}