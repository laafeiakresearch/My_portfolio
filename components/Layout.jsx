import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Your Name | Portfolio</title>
        <meta name="description" content="Mechanical Engineer and AI Enthusiast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-900 text-white">
        {children}
      </main>
    </>
  );
}