// Framework dependencies
import { SessionProvider } from 'next-auth/react';

// Local dependencies
import { wrapper } from "../store";
import '../styles/common/globals.scss'

function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default wrapper.withRedux(App);