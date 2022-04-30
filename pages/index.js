import Head from 'next/head'
import Login from '../components/Login'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { getSession, useSession } from 'next-auth/react'

// https://next-auth.js.org/tutorials/securing-pages-and-api-routes
export default function Home() {
  const { data: session } = useSession();
  //console.log(`Home session: ${session}`);

  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>fbclone</title>
        <meta name="description" content="fbclone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Sidebar />

      </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(`index.js-getServerSideProps-session: ${session}`);
  console.log(session);
  return {
    props: { session },
  }
}
