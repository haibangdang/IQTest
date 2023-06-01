/* eslint-disable */
import '../styles/global.styles.scss';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
