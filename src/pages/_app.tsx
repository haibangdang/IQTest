/* eslint-disable */
import '../styles/global.styles.scss';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/index';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Test IQ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <base href="/"></base>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
