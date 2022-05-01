import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import untitled from '../public/untitled3.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>City X</title>
        <meta name="description" content="City X Malmö Sweden Techno" />
        
      </Head>

      <main className={styles.main}>
        
      <h1 className={styles.title}>
      <li><a href="/https://city-xxx.com/">City X</a></li><li><a href="/about">About</a></li><li><a href="http://city-x.bandcamp.com">Bandcamp</a></li> <li><a href="https://www.instagram.com/cityx.x/">Instagram</a></li> <a href="https://soundcloud.com/cityxxx">Soundcloud</a>
        </h1>
        <h2 className={styles.artist}>
          DJ SUBWAY 91<br></br> LOG HANSEN<br></br> VIRTUAL ECHO
        </h2>
       
      </main>
      <div className={styles.image}>
      <Image src={untitled} width="960px" height="540px" layout="fixed" priority={true} />
      </div>
    
    </div>
  )
}
