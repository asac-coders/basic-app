import Link from 'next/link'
// import styles from 'styles.header.css'
import Image from 'next/image'
import styles from '../styles.module.css'
import { render } from 'react-dom'
import { VscHome } from "@react-icons/all-files/vsc/VscHome";
import { FiUsers } from "@react-icons/all-files/fi/FiUsers";
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import { ImHome } from "@react-icons/all-files/im/ImHome";
import { HiUserGroup } from "@react-icons/all-files/hi/HiUserGroup";
import { RiLoginBoxFill } from "@react-icons/all-files/ri/RiLoginBoxFill";





// export default () => (


//     <header className={styles.header11} >
//         <nav className={styles.nav22}>
//             <div className={styles.logo}>
//                 ASAC BLOG
//                 <span className={styles.logoBlog}>
//                   {/* BLOG */}
//                 </span>
//             </div>

//             <div className={styles.navlinks}>

//             <ul>
//                 <li><a className={styles.li} href="/">Home </a></li>
//                 <li><a className={styles.li} href="/cards">Our Students</a></li>
//                 <li><a className={styles.li} href="/login">Login</a></li>
//             </ul>
//             </div>
//         </nav>
//     </header>


// )

export default () => (


    <header className={styles.header11} >
        <nav className={styles.nav22}>
            <div id={styles.logocontainer}>
                <div id={styles.pelogo}> ASAC blog</div>
            </div>


            <div className={styles.navlinks}>

                <ul>
                    <li><a className={styles.li} href="/"> <ImHome className={styles.sa} /></a></li>
                    <li><a className={styles.li} href="/cards"><HiUserGroup className={styles.sa} /></a></li>
                    <li><a className={styles.li} href="/login"><RiLoginBoxFill className={styles.sa} /></a></li>
                </ul>
            </div>
        </nav>
    </header>


)

