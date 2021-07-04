import styles from '../styles/SingleComment.module.css';
const SingleReply = ({rd, item,user}) => {
    return (
        <>
             {rd.map((it) => {
                    if (it.pi === item._id) {
                      return (
                        <div className={`${styles.sc_flex} ${styles.replies_area}`}>
                          <img src={it.img} alt="img" />
                          <div className={styles.sc_info}>
                            <h5>{it.name}</h5>
                            <p>{it.repMsg}</p>
                            <div>
                                {/* {user?.email !== it.email && user?.email ? (
                                    <div>
                                    <button onClick={toggle}>reply</button>
                                    </div>
                                ) : (
                                    ""
                                )} */}

                              {user?.email === it.email && (
                                <div className={styles.edbtn}>
                                  <button className={styles.editbtn}>
                                    edit
                                  </button>
                                  <button className={styles.delbtn}>
                                    delete
                                  </button>
                                </div>
                              )}
                            </div>
                            <small>
                              <small>{it.date}</small>
                            </small>
                          </div>
                        </div>
                      );
                    }
                  })}   
        </>
    )
}

export default SingleReply
