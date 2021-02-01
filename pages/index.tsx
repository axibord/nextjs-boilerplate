import Head from 'next/head'
import styles from '../styles/Home.module.css'

interface Props {}

const Home = (props:Props): JSX.Element => (
  <div>
    <Head>
      <title>NextJS Boilerplate</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <h1 className='text-6xl'>Hello world!</h1>

  </div>
)

export default Home
