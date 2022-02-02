
import Link from 'next/link';
import { useContext } from 'react';
import { darkmodeContext } from '../../Components/Layout';
import styles from '../../styles/NotFound.module.css';
const Notfound = () => {
    const [darkmode, setDarkmode] = useContext(darkmodeContext);
    return (
        <>
            <section>
            <div className={styles.main}>
                <div className={darkmode ? `${styles.fof} ${styles.color}`:styles.fof}>
                    <h1>Error 404</h1> <br />
                    <Link href='/'><a>হোমে ফিরে যান </a></Link>
                </div>
            </div>
            </section>
        </>
    )
}

export default Notfound 
