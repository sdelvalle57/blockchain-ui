import '../styles/globals.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'


import client from "../apollo/client"
import TopLevelProviders from '../providers/TopLevelProviders'
import store from '../store/store'
import Layout from '../components/Layout'

export default function AssetTrackerLite({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const path = router.asPath;

  return (
    <Provider store={store}>
      <TopLevelProviders path={path}>
        <ApolloProvider client={client}>
          <ChakraProvider>
            <Layout {...pageProps} path={path}>
              <Component {...pageProps} path={path} />
            </Layout>
          </ChakraProvider>
        </ApolloProvider>
      </TopLevelProviders>
    </Provider>
  )
}
