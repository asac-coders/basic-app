import styles from '../styles.module.css'
import Image from 'next/image'

import Link from 'next/link'

export default function Home(props) {
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
                            <img src={props.data[0].image} alt="images"></img>
                        </div>
                        <div className={styles.details}>
                            <h2>{props.data[0].first_name} {props.data[0].Last_name}<br /><span>Developer</span></h2>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgBx}>
                            <img src={props.data[1].image} alt="images"></img>
                        </div>
                        <div className={styles.details}>
                            <h2>{props.data[1].first_name} {props.data[1].Last_name}<br /><span>Developer</span></h2>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imgBx}>
                            <img src={props.data[2].image} alt="images"></img>
                        </div>
                        <div className={styles.details}>
                            <h2>{props.data[2].first_name} {props.data[2].Last_name}<br /><span>Developer</span></h2>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgBx}>
                            <img src={props.data[3].image} alt="images"></img>
                        </div>
                        <div className={styles.details}>
                            <h2>{props.data[3].first_name} {props.data[3].Last_name}<br /><span>Developer</span></h2>
                        </div>
                    </div>

                </div>

                <div className={styles.box}>
                    <link></link>


                </div>




                <br></br>
                <a className={styles.seeMore} href="/cards">See More</a>
                <br></br>

            </div>



            <div className={styles.vision}>

            </div>

            <div className={styles.mission}>

            </div>

        </body>



    )
}


export async function getServerSideProps() {
    const res = await fetch(`http://localhost:8000/blog/`)
    const data = await res.json()

    return { props: { data: data } }
}
