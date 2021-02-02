import Link from 'next/link'
import styles from '../styles.module.css'
export default() => (

   
        <footer className={styles.footer}>
            <div className={styles.footer_addr}>
              <h1 className= {styles.footer_logo}>ASAC</h1>
          
              <h2>Contact Us</h2>
              <br/>
              <address>
                5534 Amman In Jordan. The World 22193-10212<br/>
           <br/>
          
              </address>     
            </div>
            
            
            <ul className={styles.footer__nav}/>
              <li className="nav__item">
                <h2 className="nav__title">Our Pages</h2>
          
                <ul className="nav__ul">
                  <li>
                    <a href="#">Home Page</a>
                  </li>
          
                  <li>
                    <a href="#">Sign-In Page</a>
                  </li>
                      
                  <li>
                    <a href="#">About Us Page</a>
                  </li>
                </ul>
              </li>
              
          
              
               <ul className={styles.footer__nav}/>
              <li className="nav__item">
                <h2 className="nav__title">Our Accountes</h2>
          
                <ul className="nav__ul">
                  <li>
                    <a href="#">Facebook Account</a>
                  </li>
          
                  <li>
                    <a href="#">Instagram Account</a>
                  </li>
                      
                  <li>
                    <a href="#">Twitter Account</a>
                  </li>
                </ul>
              </li>
                 
                   
               <ul className={styles.footer__nav}/>
              <li className="nav__item">
                <h2 className="nav__title"> <span>We work for you <span className="heart">♥</span> </span></h2>
          
                <ul className="nav__ul">
                  <li>
                    <p>&copy; 2021 Something. All rights reserved.</p>
                  </li>
                </ul>
              </li>
                  
                  
          
          
             
            
          </footer>
    )
