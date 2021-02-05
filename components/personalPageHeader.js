import Link from 'next/link'
// import styles from 'styles.header.css'
import Image from 'next/image'
import styles from '../styles.module.css'
import { render } from 'react-dom'
const logout =()=>{
    localStorage.clear()
}
export default () => (


    <header className={styles.header11} >
        <nav className={styles.nav22}>
            <div className={styles.logo}>
                ASAC BLOG
                <span className={styles.logoBlog}>
                  
                </span>
            </div>

            <div className={styles.navlinks}>

            <ul>
                <li><a className={styles.li} href="/personalPage">Home</a></li>
                <li><a className={styles.li} href="/cardsAfterLogin">Our Students</a></li>
                <li><a className={styles.li} onClick={logout} href="/">Logout</a></li>
                <li><a className={styles.li} href="/update">Update Profile</a></li>
            </ul>
            </div>
        </nav>
    </header>


)

