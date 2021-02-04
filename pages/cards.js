import styles from '../styles.module.css'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Careds(props) {
    return (
        <>
        <Header style={{width:"80px"}}/>
        <div className={styles.box_cards} >
            <div className={styles.cards_header}>
                <h1>Our Students</h1>
            </div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "auto", justifyContent: "center" }}>
                {props.data.map(data => {
                    return (

                        <div className={styles.card} style={{ display: "inline-block", margin: "70px" }}>
                        <Link href="/[id].js" as = {`/${data.id}`}>
                            <div className={styles.imgBx}>
                                <img src={data.image} alt="images"></img>
                            </div>
                            </Link>
                            <div className={styles.details}>
                                <h2>{data.first_name} {data.Last_name}<br /><span>Developer</span></h2>
                            </div>
                        </div>

                    )
                })}


            </div>
        </div>
            <Footer />
        </>


    );
};

export async function getServerSideProps() {
    const res = await fetch(`https://asac-blog.herokuapp.com/blog/`)
    const data = await res.json()
    
    return { props: { data: data } }
}