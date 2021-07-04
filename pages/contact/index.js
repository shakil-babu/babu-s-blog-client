import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import styles from '../../styles/Contact.module.css';
import { darkmodeContext } from '../../Components/Layout';
import {FaCheck} from 'react-icons/fa';
const index = () => {
    // darkmode context
    const [darkmode, setDarkmode] = useContext(darkmodeContext);

    // states
    const [info, setInfo] = useState({name:'',email:'', message:''})
    const [success, setSuccess] = useState(false);
    const [validate, setValidate] = useState(false);

    // date
    const today = new Date().toLocaleDateString();
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const dateTime = `তারিখ: ${today} এবং সময়: ${time}` 


    // changeHandler
    const changeHandler = (event) => {
        setInfo({
            ...info,
            [event.target.name] : event.target.value
        })
    }


    // submitHandler
    const submitHandler = (event) => {
        event.preventDefault();

        const dt = {
            name:info.name,
            email:info.email,
            message:info.message,
            dateTime:dateTime
        }

        if(info.name==='' || info.email==='' || info.message===''){
            setValidate(true);
        }else{
            fetch(`https://pristine-kenai-fjords-11934.herokuapp.com/sendMessage`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(dt),
        })
            .then((response) => response.json())
            .then((data) => {
                setSuccess(true)
                setValidate(false)
            });
        }

        setInfo({
            name:'',
            email:'',
            message:''
        })


        }


        useEffect(() => {
            setTimeout(() => {
                setSuccess(false);
            }, 7000);
        },[])

    return (
        <>
            <Head>
                <title> যোগাযোগ | শাকিল বাবুর ঝুলি</title>
            </Head>

            <div className="container">
            <section className={darkmode ? styles.dark_design : styles.light_design}>
                <main className={styles.contact_main_area}>

                    <div className={styles.contact_box}>
                        <p className={darkmode ? styles.lightColor : styles.darkColor}>আপনার মনে যদি অনেক না বলা কথা থাকে বা আপনি যদি কোনো প্রস্তুতি ছাড়া
                            আমাকে গালি দিতে চান অথবা আপনি কোনো সাজেশন দিতে চাইলে নিচের ফর্ম পূরণ 
                            করে পাঠিয়ে দিন । যদি এখানে লিখতে আপনার কষ্ট হয় তাহলে <span>personal.shakil.babu@gmail.com</span> এই ইমেইলে
                             পাঠিয়ে দিন।
                        </p>


                        <form onSubmit={submitHandler} className={styles.contact_form}>
                            {
                                validate && <h4>নাম, ইমেইল এবং মেসেজ ঠিকঠাক ভাবে পূরণ করুন!</h4>
                            }
                            <input onChange={changeHandler} value={info.name} type="text" placeholder='নাম' name='name' />
                            <input onChange={changeHandler} value={info.email} type="email" placeholder='ইমেইল' name='email' />
                            <textarea onChange={changeHandler} value={info.message} name="message"  cols="30" placeholder='মনের কথা'  rows="5"></textarea>
                            <button className={darkmode ? styles.btn : styles.button}>পাঠিয়ে দিন</button>

                            {
                                success && (
                                    <div className={styles.successBox}>
                                        <FaCheck className={styles.si}/>
                                        <h4>আপনার মনের কথা পাঠানো সফল হয়েছে, ধন্যবাদ ।</h4>
                                    </div>
                                )
                            }
                        </form>

                </div>
                </main>
            </section> 
            </div>
        </>
    )
}

export default index
