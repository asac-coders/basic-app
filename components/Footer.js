import Link from 'next/link'
import styles from '../styles.module.css'
export default() => (

   
  <footer className={styles.footer_distributed}>

  <div className={styles.footer_left}>

    <h3>ASAC Blog<span></span></h3>

    <p className={styles.footer_links}>
      <a href="/">Home</a>
      ·
      
      <a href="/cards">Portfolios</a>
      ·
      
      
      <a href="/login">Sign-In</a>
      ·
      <a href="#footer">Contact</a>
    </p>

    <p className={styles.footer_company_name}>LTUC company © 2021</p>

    <div className={styles.footer_icons}>

      {/* <a href="#"><i className={styles.fa}  className={styles.fa_facebook} ></i></a>
      <a href="#"><i className={styles.fa_twitter} className={styles.fa}></i></a>
      <a href="#"><i className={styles.fa_linkedin} className={styles.fa}></i></a>
      <a href="#"><i  className={styles.fa_github} className={styles.fa}></i></a> */}

    </div>

  </div>

  <div className={styles.footer_right}>

    <p>Contact Us</p>

    <form action="#" method="post">

      <input type="text" name="email" placeholder="Email"/>
      <textarea name="message" placeholder="Message"></textarea>
      <button>Send</button>

    </form>

  </div>

</footer>
    )

