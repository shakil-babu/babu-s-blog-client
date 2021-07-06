
import { useContext } from 'react';
import { darkmodeContext } from '../Components/Layout';
import styles from '../styles/Aboutme.module.css';
import Skeleton from "react-loading-skeleton";
const SkeletonProfile = () => {
    const [darkmode, setDarkmode] = useContext(darkmodeContext);

    return (
        <section className={darkmode ? `${styles.aboutArea} ${styles.dark}` :`${styles.aboutArea} ${styles.light}`}>
            <div className={styles.infoFlex}>
                <div className={darkmode ? `${styles.imgContent} ${styles.darkmode}`:styles.imgContent}>

                    <Skeleton width={200} height={200} />
                    <Skeleton width={200} />
                    <Skeleton width={190}/>
                    <div className={styles.iconFlex}>
                        <Skeleton width={15}/>
                        <Skeleton width={15}/>
                        <Skeleton width={15}/>
                    </div>
                </div>
                <div className={styles.othersContent}>
                    <Skeleton width={30}/>
                    <Skeleton/>
                    <Skeleton width={100}/>
                </div>
            </div>
        </section>
    )
}

export default SkeletonProfile
