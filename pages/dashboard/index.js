import { useEffect, useState } from "react";
import styles from '../../styles/Footer.module.css';

const index = () => {
    const [data, setData] = useState([]);
    const readMsg = () => {
        fetch('https://pristine-kenai-fjords-11934.herokuapp.com/readMessages')
        .then(res => res.json())
        .then(json => setData(json))
    }

    useEffect(() => {
        readMsg();
    },[])
    return (
        <>
            <section className="container">
            <section className={styles.msgArea}>
                <main className={styles.msgBoxWhole}>
                    

                    <div className={styles.msgOutput}>
                    <h4>আমাকে মোট {data.length} জন মেসেজ করেছে :</h4>
                        {
                            data.map(item => {
                                return (
                                    <div className={styles.singleMsg}>
                                        <h5>Name: {item.name}</h5>
                                        <h5>Email: {item.email}</h5>
                                        <h5>{item.dateTime}</h5>
                                        <p>{item.message}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </main>
            </section>
            </section>
        </>
    )
}

export default index
