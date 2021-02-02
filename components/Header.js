import Link from 'next/link'
// import styles from 'styles.header.css'
import Image from 'next/image'
import styles from '../styles.module.css'


export default() => (


<header>
        <nav className={styles.navbar}>
            <div className={styles.logo}>        
        <Image
        src="/ltuc.png"
        alt="Portfolio image"
        width={90}
        height={90}
      /></div>
            <a className={styles.togglebtn} href="#"><span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span></a>
            <div className={styles.navbar_links}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
</header>


)