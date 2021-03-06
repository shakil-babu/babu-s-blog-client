import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import styles from '../../styles/Details.module.css';
import React, { useContext } from 'react';
import Head from 'next/head';
import { AuthContext, darkmodeContext } from '../../Components/Layout';
import {FaArrowAltCircleLeft} from 'react-icons/fa';
import Comment from '../../Components/Comment';
import Login from '../../Components/Login';
import Router from 'next/router'
import SingleComment from '../../Components/SingleComment';
import ReadingProgress from '../../Components/ReadingProgress';
const PostDetails = ({frontmatter:{title, date, author, cover_image}, slug, content}) => {

    const [darkmode, setDarkmode] = useContext(darkmodeContext);
    const [user, setUser] = useContext(AuthContext);

    const target = React.createRef();
    return (
        <>
        <Head>
            <title>{title} | শাকিল বাবুর ঝুলি</title>
        </Head>
        

        
        <ReadingProgress target={target}/>
            <section ref={target} className={styles.post_details_area}>
                <div className="container">
                    <a className={styles.back_btn}  onClick={() => Router.back()}><FaArrowAltCircleLeft className={styles.back_icon} /> back</a>
                    <main className={darkmode ? styles.post_grid_layout : styles.post_grid_dark_layout}>
                        <div className={styles.post_content}>
                            <img src={cover_image} alt="img" />
                            <div className={styles.author_date}>
                                <h5><mark>{author}</mark></h5>
                                <h4>{date}</h4>
                            </div>
                            <div className={styles.other_info}>
                            <h1 className={styles.title}>{title}</h1>
                            <hr className={styles.hr} />
                          <div dangerouslySetInnerHTML={{__html:marked(content)}} ></div> 


                        {/* =========== comment component =============== */}
                        <hr />

                        {
                            user?.name ? <Comment user={user} slug={slug} /> : <Login/>
                        }
                   
                    <div>
                        <SingleComment slug={slug} user={user}/>
                    </div>

                        


                            </div>
                        </div>
                         
                    </main>

                    
                </div>
            </section>
        </>
    )
}

export default PostDetails ; 


export const getStaticPaths = async() => {
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map(filename => ({
        params:{
            slug: filename.replace('.md','')
        }
    }))

    console.log(paths);

    return {
        paths,
        fallback:false
    }
}


export const getStaticProps = async ({params:{slug}})=>{
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug+'.md'), 'utf-8');
    const {data:frontmatter, content} = matter(markdownWithMeta);

    return {
        props:{
            frontmatter,
            slug,
            content
        }
    }
}


