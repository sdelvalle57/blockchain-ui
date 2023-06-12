import '../styles/globals.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../store/store'
import { useRouter } from 'next/router'
import TopLevelProviders from '../providers/TopLevelProviders'

export default function AssetTrackerLite({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const path = router.asPath;

  return (
    <Provider store={store}>
      <TopLevelProviders path={path}>
          {/* <Layout {...pageProps} path={path}> */}
            <Component {...pageProps} path={path} />
          {/* </Layout>
          <GlobalModal /> */}
        </TopLevelProviders>
    </Provider>
  )
}
