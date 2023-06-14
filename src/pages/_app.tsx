/* eslint-disable */
import '../styles/global.styles.scss';
import 'antd/dist/reset.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/index';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const routeName = router.route.replace('/', '');
  return (
    <Provider store={store}>
      <Head>
        {router.route === '/' ? (
          <title>Test IQ</title>
        ) : (
          <title>Test IQ - {routeName}</title>
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <base href="/"></base>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
