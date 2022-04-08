import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>City X</title>
        <meta name="description" content="City X Malmö Sweden Techno" />
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <li><a href="https://city-xxx.com/">City X</a></li><li><a href="http://city-x.bandcamp.com">Bandcamp</a></li> <li><a href="https://www.instagram.com/cityx.x/">Instagram</a></li> <a href="https://soundcloud.com/cityxxx">Soundcloud</a>
        </h1>

        <h2 className={styles.artist}>
          <li>Log Hansen</li><li>Dj Subway 91</li> <li>Virtual Echo</li>
        </h2>

      </main>

    
    </div>
  )
}
