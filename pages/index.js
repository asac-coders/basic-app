import styles from '../styles.module.css'
import Image from 'next/image'

import Link from 'next/link'

export default function Home() {
  return (
    <body className={styles.body}>
      <div className={styles.main}>
        {/* <h1>heeyy</h1> */}
      
      </div>


    <div className={styles.students}>
      <h1 className={styles.font}>Our Creative Students</h1>
      <div class="imgsdiv" id="javade">
            <h2 class="Names"> <a href="">test</a> </h2>
            <Image
        src="/dundun.jpg"
        alt="Picture of the author"
        width={100}
        height={100}
      />
            <p>any thing</p>
        </div>
      

        <div>
          
        </div>

    
      <div class="imgsdiv" id="javade">
            <h2 class="Names"> <a href="">test</a> </h2>
            <Image
        src="/dundun.jpg"
        alt="Picture of the author"
        width={100}
        height={100}
      />
            <p>any thing</p>
        </div>
      
    </div>
    

   
  
    </body>
   
   )
  }
  
  