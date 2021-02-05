import Link from 'next/link'
// import styles from 'styles.header.css'
import Image from 'next/image'
import styles from '../styles.module.css'
import { render } from 'react-dom'
import { ImHome } from "@react-icons/all-files/im/ImHome";
import { HiUserGroup } from "@react-icons/all-files/hi/HiUserGroup";
import { RiLoginBoxFill } from "@react-icons/all-files/ri/RiLoginBoxFill";
import { RiLogoutBoxFill } from "@react-icons/all-files/ri/RiLogoutBoxFill";
import {MdUpdate} from "@react-icons/all-files/md/MdUpdate";


const logout =()=>{
    localStorage.clear()
}
export default () => (
    <header className={styles.header11} >
        <nav className={styles.nav22}>
            <div id={styles.logocontainer}>
                <div id={styles.pelogo}> ASAC blog</div>
            </div>


            <div className={styles.navlinks}>

                <ul>
                    <li><a   className={styles.sa} href="/personalPage"> <ImHome /></a></li>
                    <li><a   className={styles.sa} href="/cardsAfterLogin"><HiUserGroup /></a></li>
                    <li><a   className={styles.sa} onClick={logout} href="/"><RiLogoutBoxFill/></a></li>
                    <li><a   className={styles.sa} href="/update"><MdUpdate/></a></li>
                </ul>

            </div>
        </nav>
    </header>







)

