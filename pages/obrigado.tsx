import Head from 'next/head'

import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Head>
        <title>Entre em Contato</title>
        <meta name="description" content="Pagina Oficial do Fred Ferreira" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CTA />
    </>
  )
}
