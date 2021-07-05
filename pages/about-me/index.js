
import styles from '../../styles/Aboutme.module.css';
import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import { darkmodeContext } from '../../Components/Layout';
import img from '../../Components/shakil.png';
import {FaFacebookSquare, FaGithubSquare, FaLinkedin} from 'react-icons/fa';
const Index = () => {
    const [darkmode , setDarkmode] = useContext(darkmodeContext);
    return (
        <>
            <Head>
                <title> আমার সম্পর্কে | শাকিল বাবুর ঝুলি</title>
            </Head>
            <div className="container">
                <section className={darkmode ? `${styles.aboutArea} ${styles.dark}` :`${styles.aboutArea} ${styles.light}`}>
                    <div className={styles.infoFlex}>
                        <div className={darkmode ? `${styles.imgContent} ${styles.darkmode}`:styles.imgContent}>
                            <Image src={img} alt="img" height='200px' width='200px' />
                            <h1>শাকিল বাবু ( হাবলু )</h1>
                            <h5>জাভাস্ক্রিপ্ট এবং সি++ ভালোবাসি ।</h5>

                            <div className={styles.iconFlex}>
                                <a rel="noreferrer" href="https://www.facebook.com/profile.php?id=100025305922873" target="_blank"><FaFacebookSquare className={styles.icon}/> </a>
                                <a rel="noreferrer" href="https://github.com/shakil-babu" target="_blank"><FaGithubSquare className={styles.icon1}/></a>
                                <a rel="noreferrer" href="https://www.linkedin.com/in/shakil-babu-b1a144211/" target="_blank"><FaLinkedin className={styles.icon2}/></a>
                            </div>
                        </div>
                        <div className={styles.othersContent}>
                            <h1>হ্যালো,</h1>
                            <p>আমি একজন হাবলু MERN স্টাক ডেভেলপার, আমি শিখতে এবং লিখতে ভালোবাসি। স্পেশালি, আমার ওয়েব এপ্স নিয়ে কাজ করতে ভালো লাগে এবং 
                                 একজন হাবলু হিসেবে যতোটা সম্ভব দ্রুত কোনো টেকনোলজি শেখার চেষ্টা করি। এখন পর্যন্ত হাবলু বেশ কিছু টেকনোলজি নিয়ে কাজ করেছে যেমন:
                                 JavaScript, React.js, Node.js, Express.js, Next.js এবং MongoDB । বর্তমানে একজন ছাত্র তাই এখন শেখাটাই আমার কাছে মুখ্য। </p>

                                 <a href="https://shakil-babu.web.app/" rel="noreferrer" target="_blank"><button>আমার পোর্টফলিও</button></a>
                        </div>
                    </div>
                </section>
            </div>  
        </>
    )
}

export default Index
