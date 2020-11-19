import Head from 'next/head'
import { Breakpoint, BreakpointProvider } from 'react-socks';
import Desktop from './desktop/main'
import Mobile from './mobile/main'

export default function Home() {
  return (
    <BreakpointProvider>
      <div>
        <Head>

          <title>Flow Dev</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Breakpoint customQuery='(max-width: 800px)'>
          <Mobile />
        </Breakpoint>
        <Breakpoint customQuery='(min-width: 1200px)'>
          <Desktop />
        </Breakpoint>
      </div>
    </BreakpointProvider>
  )
}
