import type { AppProps } from 'next/app'
import { QueryClientProvider, queryClient  } from '@/util/queryClient'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      </QueryClientProvider>
  )
}
