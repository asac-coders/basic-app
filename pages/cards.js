import styles from '../styles.module.css'

export default function Careds(props) {
    return (
        <div className={styles.box_cards} >
            <div className={styles.cards_header}>
                <h1>Our Students</h1>
            </div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "auto", justifyContent: "center" }}>
                {props.data.map(data => {
                    return (

                        <div className={styles.card} style={{ display: "inline-block", margin: "70px" }}>

                            <div className={styles.imgBx}>
                                <img src={data.image} alt="images"></img>
                            </div>
                            <div className={styles.details}>
                                <h2>{data.first_name} {data.Last_name}<br /><span>Developer</span></h2>
                            </div>
                        </div>

                    )
                })}


            </div>
        </div>


    );
};

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:8000/blog/`)
    const data = await res.json()
    
    return { props: { data: data } }
}