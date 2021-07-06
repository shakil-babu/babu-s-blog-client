import {useState } from 'react';
import styles from '../styles/Comment.module.css';
const Comment = ({user, slug}) => {
    const [success, setSuccess] = useState(false);
    const [validate, setValidate] = useState(false);

    // from context (destructuring)
    const {name, email, img} = user ;

    // todayDate and time
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        const ddaattee = date.toLocaleDateString();
        return ( ddaattee + ' at ' + strTime);
    }
    const dat = formatAMPM(new Date);

    // for comment
    const [comment, setComment] = useState('');
    // change handler
    const changeHandler = (event) => {
        setComment(event.target.value);
    }

    // form submit handler
    const submitHandler = (event) => {
        // event.preventDefault();

        console.log(comment);
        const dt = {
            name:name,email:email,img:img,date:dat, comment:comment, slug:slug
        }

        if(comment === ''){
            setValidate(true);
        }else{
            fetch(`https://pristine-kenai-fjords-11934.herokuapp.com/addComment`, {
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

        setComment('');
    }



    return (
        <>
            <section className={styles.comment_area}>
                <div className={styles.greeting_img}>
                    <img src={user.img} alt="img" /> <h5>হ্যালো {user.name}, আপনার মতামত শেয়ার করুন ।</h5>
                </div>
                <form onSubmit={submitHandler} className={styles.comment_form}>
                    <textarea onChange={changeHandler} value={comment} cols="30" rows="5" placeholder='আপনার মতামত' ></textarea>
                    <button type='submit'>পাঠান</button>
                </form>
            </section>
        </>
    )
}

export default Comment
