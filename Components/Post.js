import Link from 'next/link';
import { useContext } from 'react';
import { darkmodeContext } from './Layout';
const Post = ({post}) => {
    const {frontmatter:{cover_image, title, desc, author, date, category}} = post ;
    const [darkmode, setDarkmode] = useContext(darkmodeContext);
    return (
        <>
           <section>
                <main className={darkmode ? 'post_main darkBgg':'post_main lightBgg'}>
                    <div className='post_img'>
                        <img src={cover_image} alt='pic'></img>
                    </div>

                    <div className={darkmode ? 'post_info dark-info':'post_info light-info'}>
                        <h3>{category}</h3>
                        <Link href={`/blogs/${post.slug}`}><h1>{title}</h1></Link>
                        <hr />
                        <p>{desc}</p>

                        <h5> <mark>{author}</mark></h5>
                        <h5>{date}</h5>
                    </div>
                </main>
               
           </section>
        </>
    )
}

export default Post
