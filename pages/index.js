import styles from '../styles.module.css'
import Image from 'next/image'

import Link from 'next/link'

export default function Home() {
  return (
<body className={styles.body}>
      <div className={styles.main}>
        {/* <h1>heeyy</h1> */}
      
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

    <div className={styles.students}>
      <h1 className={styles.font}>Our Creative Students</h1>
      
</div>


   
{/* <section className={styles.main_container}>


<section className={styles.row} className={styles.rowOne}>
  <div className={styles.box_container}>
    <div className={styles.box}className={styles.box_one}>
        <div className={styles.front}><span>FRONT</span></div>
        <div className={styles.back}>BACK</div>
    </div> 
  </div>
  <div className={styles.box_container}>
    <div className={styles.box}className={styles.box_two}>
        <div className={styles.front}><span>FRONT</span></div>
        <div className={styles.back}>BACK</div>
    </div> 
  </div>
  <div className={styles.box_container}>
    <div className={styles.box}className={styles.box_three}>
        <div className={styles.front}><span>FRONT</span></div>
        <div className={styles.back}>BACK</div>
    </div> 
  </div>
  <div className={styles.box_container}>
    <div className={styles.box}className={styles.box_four}>
        <div className={styles.front}><span  >FRONT</span></div>
        <div className={styles.back}>BACK</div>
    </div> 
  </div>

  
</section>
</section> */}
  

		

    </body>
   
   )
  }
 
