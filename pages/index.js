import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>City X</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <li><a href="http://city-x.bandcamp.com">City X</a></li><li><a href="http://city-x.bandcamp.com">Bandcamp</a></li> <li><a href="http://city-x.bandcamp.com">Instagram</a></li> <a href="https://soundcloud.com/cityxxx">Soundcloud</a>
        </h1>

        <h2 className={styles.artist}>
          <li>Log Hansen</li><li>Dj Subway 91</li> <li>Virtual Echo</li>
        </h2>

      </main>

    
    </div>
  )
}