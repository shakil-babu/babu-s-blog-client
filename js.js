<div className={styles.sc_flex}>
    <img src={it.img} alt="img" />
    <div className={styles.sc_info}>
        <h5>{it.name}</h5>
        <p>{it.repMsg}</p>
    <div>
    {
        user?.email !== it.email && user?.email ?  (
            <div>
                <button onClick={toggle}>reply</button>

                    {/* {
                        isReply && (
                            <Reply it ={it} slug={slug}/>
                        )
                    } */}
                </div>
            ):""
        }

    
        
            {
                user?.email === it.email && (
                    <div className={styles.edbtn}>
                        <button className={styles.editbtn}>edit</button>
                        <button className={styles.delbtn}>delete</button>
                    </div>
                )
            }
        </div>
        <small><small>{it.date}</small></small>
    </div>
</div>