import Link from 'next/link'
// import styles from 'styles.header.css'
import Image from 'next/image'
import styles from '../styles.module.css'
import { render } from 'react-dom'

export default () => (


    <header className={styles.header11} >
        <nav className={styles.nav22}>
            <div className={styles.logo}>
                ASAC BLOG
                <span className={styles.logoBlog}>
                  {/* BLOG */}
                </span>
            </div>

            <div className={styles.navlinks}>

            <ul>
                <li><a className={styles.li} href="/">Home</a></li>
                <li><a className={styles.li} href="/cards">Our Students</a></li>
                <li><a className={styles.li} href="/login">Login</a></li>
            </ul>
            </div>
        </nav>
    </header>


)

