import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useContext, useEffect, useState } from 'react';
import Search from '../../Components/Search.js';
import Post from '../../Components/Post.js';
import { blogsContext } from '../../Components/Layout.js';
const index = ({posts}) => {

const arr = [...posts];
const [blogs, setBlogs] = useContext(blogsContext);
const setData = () => {
  setBlogs(arr);
}
useEffect(() => {
  setData();
},[])

// console.log('my blogs: ', blogs)
console.log('shakil : ', posts);


  // state
  const [isSearch, setIsSearch] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [val, setVal] = useState('');

  //toggle
  const toggle = () => {
    setIsSearch(!isSearch);
  }

  // changeHandler
  const changeHandler  = (event) => {
      setVal(event.target.value);
  }

  // data matched and search
  const postFilter = () => {
      const title = posts.filter((post) => post.slug.toLowerCase().includes(val.toLowerCase()));
      setFilterData(title);
  }

// useEffect
useEffect(() => {
  postFilter();
},[val])



    return (
        <>
            <Head>
                <title> ব্লগস | শাকিল বাবুর ঝুলি</title>
            </Head>
            <section className="container">

         <Search changeHandler={changeHandler} toggle={toggle} isSearch={isSearch} val={val} />
            
          {/* post showcase area */}
            <div>
              {
                filterData.length > 0 ? (
                  <div>
                      {
                        filterData.map((post, index)=> {
                          return <Post key={index} post={post} />
                        })
                    }
                  </div>
                ):(
                   <h4 className='error'>দুঃখিত ! {val} নামে কোনো আরটিকেল পাওয়া যায় নি । </h4>
                )
              }
            </div>
        </section>
        </>
    )
}

export default index

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