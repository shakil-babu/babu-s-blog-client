import { useEffect, useState } from "react";
import styles from "../styles/SingleComment.module.css";
const SingleComment = ({ user, slug }) => {

  // comments
  const [comments, setComments] = useState([]);
  const readComments = () => {
    fetch("https://pristine-kenai-fjords-11934.herokuapp.com/readComments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  };

  const specificComment = comments.filter((item) => item.slug === slug).sort((a,b) => a-b);


  const [isAllComments, setIsAllComments] = useState(false);

  // toggle handler
  const toggleHandler = () => {
    setIsAllComments(!isAllComments);
  }

  let spComments;
  if(isAllComments){
    spComments = specificComment;
  }else{
    spComments = specificComment.slice(0,5);
  }

  useEffect(() => {
    readComments();
  }, []);
  return (
    <>
      <section className={styles.sc_area}>
        <div>

          {spComments.map((item) => {
            return (
              <main>
                <div>
                  <div className={styles.sc_flex}>
                    <img src={item.img} alt="img" />

                    <div className={styles.sc_info}>
                      <h5>{item.name}</h5>
                      <p>{item.comment}</p>
                      <div>

                      </div>
                      <small>
                        <small>{item.date}</small>
                      </small>
                    </div>
                  </div>

    
                </div>
              </main>
            );
          })}
          
          {
            specificComment.length > 5 && (
              <button onClick={toggleHandler} className={styles.allCommentsBtn}>{isAllComments ? 'কিছু মন্তব্য লুকিয়ে রাখুন':'সবগুলো মন্তব্য দেখুন'}</button>
            )
          }
        </div>
      </section>
    </>
  );
};

export default SingleComment;
