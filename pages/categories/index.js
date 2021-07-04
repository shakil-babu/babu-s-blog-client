import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useContext, useState } from 'react';
import { darkmodeContext } from '../../Components/Layout';
import Link from 'next/link';

const Categories = ({posts}) => {

    // filter categories 
    let categories = [];
    posts?.forEach((item) => {
        if(item.frontmatter.category !== '**'){
            categories.push(item.frontmatter.category)
        }
    })

    // remove duplicate categories
    const removeDuplicate = new Set(categories);
    const ct = [...removeDuplicate];



    // darkmode context
    const [darkmode, setDarkmode] = useContext(darkmodeContext);
    const [active, setActive] = useState(true);


    // ============== find posts by parameter
    const [articles, setArticles] = useState([]);
    const [sct, setSct] = useState('');
    const [show, setShow] = useState(false);
    const findPosts = (ct) => {
        const arts = posts.filter((item) => item.frontmatter.category === ct);
        setArticles(arts);
        setSct(ct);
        setShow(true);
    }
    
    return (
        <>
            <Head>
                <title> ক্যাটাগরিস | শাকিল বাবুর ঝুলি</title>
            </Head>
            <div>
                <div className="container">
                    <section className={darkmode ? 'ct-area ct-dark':'ct-area ct-light'}>
                        <p>এখন পর্যন্ত এখানে  {ct.length} টি ক্যাটাগরিতে পোস্ট পাবলিশ করা হয়েছে । যে কোনো ক্যাটাগরিতে ক্লিক করলে তার আন্ডারে কয়টি এবং
                        কি কি আরটিকেল আছে তা দেখতে পারবেন । আপনি চাইলে যেকোনো আরটিকেলে ক্লিক করে তা পড়তেও পারবেন, ধন্যবাদ । </p>
                        <div className="ct-flex">
                        {
                            ct.map((item,index) => {
                                return (
                                    <div key={index} className={darkmode ? 'ct-box ct-dark-box':'ct-box ct-light-box'}>
                                        <h3 onClick={() => findPosts(item)}>{item.toUpperCase()}</h3>
                                    </div>
                                )
                            })
                        }
                        </div>


                    <div className=''>
                        {show && <h3>{sct.toUpperCase()} রিলেটেড মোট {articles.length} টি আরটিকেল আছে ।</h3>}
                        {
                            articles.map((item,index) => {
                                return (
                                    <div key={index} className={darkmode ? 'spi dark-bg':'spi light-bg'}>
                                        <Link href={`/blogs/${item.slug}`}><h4>{item.frontmatter.title}</h4></Link>
                                    </div>
                                )
                            })
                        }

                    </div>

                    </section>
                </div>
            </div>

        </>
    )
}

export default Categories ; 


// getStaticProps
export const getStaticProps = async () => {
  
    // get files from the posts dir
    const files = fs.readdirSync(path.join('posts'));
  
    // posts
    const posts = files.map(filename => {
      
      // create a slug
      const slug = filename.replace('.md','');
      
      // join the all path
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
  
      const {data:frontmatter} = matter(markdownWithMeta);
      return {
        slug,
        frontmatter,
      }
    })
    return{
      props:{posts:posts}
    }
  }
  