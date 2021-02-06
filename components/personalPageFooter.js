import Link from 'next/link'
import styles from '../styles.module.css';
import { HiOutlineLocationMarker } from "@react-icons/all-files/hi/HiOutlineLocationMarker";
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone";
import { BsEnvelope } from "@react-icons/all-files/bs/BsEnvelope";

export default() => (
      
  <footer className={styles.footer_distributed}>
  <div className={styles.footer_left}>
  <div id={styles.logocontainer}>
              <div > <img id={styles.pelogo} src="./logo_size_invert.jpg"/></div>
          </div>
      <p className={styles.footer_links}>
          <a href="/personalPage" className={styles.link}>Home</a>
          
          <a href="/cardsAfterLogin">our student</a>
      </p>
      <p className={styles.footer_company_name}>ASAC blog 2021 ®</p>
  </div>

  <div className={styles.footer_center}>
      <div>
      
          <p> <HiOutlineLocationMarker className = {styles.i}/> Amman, Jordan</p>
      </div>
      <div>
   
          <p><HiOutlinePhone  className = {styles.i}/>+9626 400 0700</p>
      </div>
      <div>
       
          <p><a href="mailto:asacBlog@gmail.com">  <BsEnvelope  className = {styles.i} style={{fontSize: "17px",
    "lineHeight": "38px"}}/> asacBlog@gmail.com</a></p>
      </div>
  </div>
  
  <div className={styles.footer_right}>
      <p className={styles.footer_company_about} style={{fontSize: "20px", color:"whiteSmoke"}}>
          <span style={{fontSize: "20px", color:" #3ebffa"}}>About The Website</span>
          A well-designed website that has some portfolios of students and access to their projects with brief inspiring articles for the new students.
      </p>
 
  </div>
   

</footer>   
      
      
      

    )

