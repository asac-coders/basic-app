import styles from '../styles.module.css'

export default function Careds(props){
    return (
       <>
        <div className={styles.box}>
            <link></link>
            <div className={styles.card}>
                <div className={styles.imgBx}>
                    <img src="../dundun.jpg" alt="images"></img>
                </div>
                    <div className={styles.details}>
                        <h2>ahmad Almohammad<br/><span>Developer</span></h2>
                    </div>
            </div>

                    <div className={styles.card}>
                        <div className={styles.imgBx}>
                            <img src="../dundun.jpg" alt="images"></img>
                        </div>
                            <div className={styles.details}>
                                <h2>ahmad<br/><span>Developer</span></h2>
                        </div>
                    </div>
{/* 
                            <div className={styles.card}>
                                <div className={styles.imgBx}>
                                    <img src={props.data[2].image} alt="images"></img>
                                </div>
                                    <div className={styles.details}>
                                        <h2>{props.data[2].first_name} {props.data[2].Last_name}<br/><span>Developer</span></h2>
                                    </div>
                            </div>


        </div>

        <div className={styles.box}>
            <div className={styles.card}>
                <div className={styles.imgBx}>
                    <img src={props.data[0].image} alt="images"></img>
                </div>
                    <div className={styles.details}>
                        <h2>{props.data[0].first_name} {props.data[0].Last_name}<br/><span>Developer</span></h2>
                    </div>
            </div>

                    <div className={styles.card}>
                        <div className={styles.imgBx}>
                            <img src={props.data[1].image} alt="images"></img>
                        </div>
                            <div className={styles.details}>
                                <h2>{props.data[1].first_name} {props.data[1].Last_name}<br/><span>Developer</span></h2>
                        </div>
                    </div>

                            <div className={styles.card}>
                                <div className={styles.imgBx}>
                                    <img src={props.data[2].image} alt="images"></img>
                                </div>
                                    <div className={styles.details}>
                                        <h2>{props.data[2].first_name} {props.data[2].Last_name}<br/><span>Developer</span></h2>
                                    </div>
                            </div> */}


        </div>
    </>
       
        
    );
};

// export async function getServerSideProps(){
//     const res = await fetch(`http://localhost:8000/blog/`)
//     const data = await res.json()
//     console.log(data)
//     return {props:{data:data}}
//   }