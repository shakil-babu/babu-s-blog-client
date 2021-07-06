import { useEffect, useState } from "react";
import styles from "../styles/SingleComment.module.css";
import Reply from "./Reply";
import SingleReply from "./SingleReply";
const SingleComment = ({ user, slug }) => {
  // reply box
  const [isReply, setIsReply] = useState(false);
  const toggle = () => {
    setIsReply(!isReply);
  };

  // comments
  const [comments, setComments] = useState([]);
  const readComments = () => {
    fetch("https://pristine-kenai-fjords-11934.herokuapp.com/readComments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  };

  const specificComment = comments.filter((item) => item.slug === slug);
  console.log("realPost: ", specificComment);

  // generate id
  const [rd, setRd] = useState([]);
  const fetchReplies = () => {
    fetch("https://pristine-kenai-fjords-11934.herokuapp.com/readReplies")
      .then((res) => res.json())
      .then((dt) => setRd(dt));
  };

  useEffect(() => {
    fetchReplies();
    readComments();
  }, []);
  return (
    <>
      <section className={styles.sc_area}>
        <div>
          {specificComment.map((item) => {
            return (
              <main>
                <div>
                  <div className={styles.sc_flex}>
                    <img src={item.img} alt="img" />

                    <div className={styles.sc_info}>
                      <h5>{item.name}</h5>
                      <p>{item.comment}</p>
                      <div>
                        {/* {user?.email !== item.email && user?.email ? (
                          <div>
                            <button onClick={toggle}>reply</button>

                            {isReply && <Reply item={item} slug={slug} />}
                          </div>
                        ) : (
                          ""
                        )} */}

                        {/* {user?.email === item.email && (
                          <div className={styles.edbtn}>
                            <button className={styles.editbtn}>edit</button>
                            <button className={styles.delbtn}>delete</button>
                          </div>
                        )} */}
                      </div>
                      <small>
                        <small>{item.date}</small>
                      </small>
                    </div>
                  </div>

                  {/* <SingleReply rd={rd} item={item} isReply={isReply} toggle={toggle} user={user} slug={slug}/> */}
                </div>
              </main>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SingleComment;
