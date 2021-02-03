import styles from '../styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from'../components/Header'

export default function Home() {
  return (
    <>
    < Header />
    <body className={styles.body}>
      
    <div className={styles.about}>
      <div>
      <img  src="/about.gif"></img>
      </div>



<Footer className={styles.Footer}></Footer>
    
    </body>
   </>
  )
}

