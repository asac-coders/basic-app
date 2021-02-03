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

      <div className={styles.box}>
            <link></link>
            <div className={styles.card}>
                <div className={styles.imgBx}>
                    <img src="https://ca.slack-edge.com/TNGRRLUMA-U0193DSSLUW-0508d9903d13-512" alt="images"></img>
                </div>
                    <div className={styles.details}>
                        <h2>Dundooneh<br/><span>Developer</span></h2>
                    </div>
            </div>

                    <div className={styles.card}>
                        <div className={styles.imgBx}>
                            <img src="https://ca.slack-edge.com/TNGRRLUMA-U0193DSSLUW-0508d9903d13-512" alt="images"></img>
                        </div>
                            <div className={styles.details}>
                                <h2>ayooosheh<br/><span>Developer</span></h2>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imgBx}>
                            <img src="https://ca.slack-edge.com/TNGRRLUMA-U0193DSSLUW-0508d9903d13-512" alt="images"></img>
                        </div>
                            <div className={styles.details}>
                                <h2>ayooosheh<br/><span>Developer</span></h2>
                        </div>
                    </div>

                    <div className={styles.card}>
                <div className={styles.imgBx}>
                    <img src="https://ca.slack-edge.com/TNGRRLUMA-U0193DSSLUW-0508d9903d13-512" alt="images"></img>
                </div>
                    <div className={styles.details}>
                        <h2>Dundooneh<br/><span>Developer</span></h2>
                    </div>
            </div>

                    </div>

                    <div className={styles.box}>
            <link></link>
            {/* <div className={styles.card}>
                <div className={styles.imgBx}>
                    <img src="https://ca.slack-edge.com/TNGRRLUMA-U0193DSSLUW-0508d9903d13-512" alt="images"></img>
                </div>
                    <div className={styles.details}>
                        <h2>Dundooneh<br/><span>Developer</span></h2>
                    </div>
            </div> */}

                    {/* <div className={styles.card}>
                        <div className={styles.imgBx}>
                            <img src="https://ca.slack-edge.com/TNGRRLUMA-U0193DSSLUW-0508d9903d13-512" alt="images"></img>
                        </div>
                            <div className={styles.details}>
                                <h2>ayooosheh<br/><span>Developer</span></h2>
                        </div>
                    </div>

                    <div className={styles.card}>
                <div className={styles.imgBx}>
                    <img src="https://ca.slack-edge.com/TNGRRLUMA-U0193DSSLUW-0508d9903d13-512" alt="images"></img>
                </div>
                    <div className={styles.details}>
                        <h2>Dundooneh<br/><span>Developer</span></h2>
                    </div>
                    
                    
            </div>
            <div className={styles.card}>
                <div className={styles.imgBx}>
                    <img src="https://ca.slack-edge.com/TNGRRLUMA-U0193DSSLUW-0508d9903d13-512" alt="images"></img>
                </div>
                    <div className={styles.details}>
                        <h2>Dundooneh<br/><span>Developer</span></h2>
                    </div>
                    
                    
            </div> */}

                    </div>

             


<br></br>
<a className={styles.seeMore} href="#">See More</a>
<br></br>

      </div>


      
      <div className={styles.vision}>
        {/* <h2>heloo</h2>
         */}
      </div>

      <div className={styles.mission}>
        {/* <h2>heloo</h2>
         */}
      </div>


    <div className={styles.hello}>
      <h1>Welcome to our App</h1>
      <Link href='/portfolio'>
            <a>About</a>
        </Link>
        <Link href='/portfolio'>
            <a>About</a>
        </Link>
        <Link href='/details'>
            <a>details</a>
        </Link>
     
    </div>


    </body>





  )
}

