import Head from 'next/head'
import { Breakpoint, BreakpointProvider } from 'react-socks';
import Desktop from './desktop/main'

export default function Home() {
  return (
    <BreakpointProvider>
      <div>
        <Head>

          <title>Flow Dev</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Breakpoint small only>

        </Breakpoint>
        <Breakpoint customQuery='(min-width: 1200px)'>
          <Desktop />
        </Breakpoint>
      </div>
    </BreakpointProvider>
  )
}
