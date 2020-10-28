import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/theme.less';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
};