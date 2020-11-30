import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/rsuite.css';
import '../styles/ivas-tech.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
};