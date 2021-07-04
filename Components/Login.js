import { useContext } from 'react';
import {FaGoogle} from 'react-icons/fa';
import { initializeLoginFramework, signInWithGoogle } from '../googleauth/fireabse';
import styles from '../styles/Comment.module.css';
import { AuthContext } from './Layout';

const Login = () => {

    const [user, setUser] = useContext(AuthContext);
    console.log('user: ', user);

    // firebse initialize
    initializeLoginFramework();
     // sign in with google
   const googleSignIn = () => {
    signInWithGoogle().then((res) => {
      
      localStorage.setItem("loggedinUser", JSON.stringify(res));
      setUser(res);
 
    });

  };



    return (
        <>
            <section className={`${styles.login_area} container`}>
                <div onClick={googleSignIn} className={styles.login_flex}>
                    <FaGoogle className={styles.icon}/> <small>পোস্টে কমেন্ট করতে গুগল ব্যাবহার করে লগইন করুন</small>
                </div>
            </section>  
        </>
    )
}

export default Login
