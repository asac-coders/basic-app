import styles from '../styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <body className={styles.body}>
      <div className={styles.main}>
      
      </div>


    <div className={styles.hello}>
      <h1>Welcome to our App</h1>
      <Link href='/portfolio'>
            <a>About</a>
        </Link>
        <Link href='/portfolio'>
            <a>About</a>
        </Link>
        <Link href='/login'>
            <a>login</a>
        </Link>
     
    </div>
    </body>
   
  )
}

