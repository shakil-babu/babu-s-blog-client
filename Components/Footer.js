import { useContext } from 'react';
import styles from '../styles/Footer.module.css';
import { darkmodeContext } from './Layout';
const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const [darkmode, setDarkmode] = useContext(darkmodeContext);

    return (
        <>
            <div className={styles.footer}>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#112240" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,106.7C672,107,768,149,864,138.7C960,128,1056,64,1152,53.3C1248,43,1344,85,1392,106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <section className={styles.footer_area}>
                <div className='container'>
                    <div className={styles.footer_babusWord}>
                            <h4>বাবুর ঝুলির বাণী :</h4>
                            <p>
                                শাকিল বাবুর ঝুলিতে আপনাকে স্বাগতম । আপনি হাবলু হন বা বস আপনাকে কিন্তু বসে থাকলে চলবে নাহ, প্রত্যেকদিনই
                                আপনার নলেজকে স্প্রেড করতে হবে । আর আপনাদের কিছুটা সুবিধার জন্যই আমার এই প্রচেষ্টা ।
                            </p>

                            <h6>সময় থাকলে দেখতে পারেন :-</h6>
                            <a href="https://eloquentjavascript.net/" target='_blank'>Eloquent JavaScript</a> <br />
                            <a href="https://github.com/getify/You-Dont-Know-JS" target='_blank'>You Don't Know JS</a> <br/>
                            <a href="https://www.learncpp.com/" target='_blank'>Learn C++</a> <br/>
                            <a href="https://www.cplusplus.com/doc/tutorial/" target='_blank'>Best for C++</a> <br/>
                        </div>

                    <h5 className={styles.footer_copyright}> <i>&copy;</i>  স্বত্ব <span>শাকিল বাবুর ঝুলি</span> {currentYear}</h5>
                </div>

            </section> 
            </div>   
        </>
    )
}

export default Footer
