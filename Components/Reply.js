

import { useContext, useEffect, useState } from 'react';
import styles from '../styles/SingleComment.module.css';
import { AuthContext } from './Layout';
const Reply = ({item, slug}) => {

    const [rep, setRep] = useState('');

    const changeHandler = (event) => {
        setRep(event.target.value);
    }

    const [user, setUser] = useContext(AuthContext);

    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        const ddaattee = date.toLocaleDateString();
        return ( ddaattee + ' at ' + strTime);
    }
    const dat = formatAMPM(new Date);

  // form submit handler
  const submitHandler = (event) => {
    // event.preventDefault();
    const dt = {
        ...user,
            date:dat,
            repMsg:rep,
            slug:slug+'reply',
            pi: item._id
    }

    if(rep === ''){
        console.log("Please fill in the blank!")
    }else{
        fetch(`https://pristine-kenai-fjords-11934.herokuapp.com/addReply`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(dt),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(true)
        });
    }

    setRep('');
}










    return (
        <>
            <section>
                <form onSubmit={submitHandler} className={styles.replyArea}>
                    <textarea onChange={changeHandler} value={rep} placeholder='reply here' cols="30" rows="3"></textarea>
                    <br />
                    <button type='submit'>Submit</button>
                </form>

            </section>
        </>
    )
}

export default Reply
