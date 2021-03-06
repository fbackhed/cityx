import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import untitled from '../public/untitled3.jpg';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>City X</title>
        <meta name="description" content="City X Malmö Sweden Techno" />
        
      </Head>

      <main className={styles.main}>
        
      <h1 className={styles.title}>
          <li><a href="/">City X</a></li><li><a href="/about">About</a></li><li><a href="http://city-x.bandcamp.com">Bandcamp</a></li>  <a href="https://soundcloud.com/cityxxx">Soundcloud</a>
        </h1>
        <h2 className={styles.abouttext}>
City X is a Malmö music label with the members Virtual Echo, Log Hansen and Dj Subway 91.
The songs we make are inspired by techno, ambient, house, exprimental, lo-fi, dreamy lushy pads, broken cassette and old folders of forgotten hard drives.
        </h2>
       
      </main>
      
    
    </div>
  )
}
