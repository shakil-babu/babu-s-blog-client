import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../Components/Post';
import Head from 'next/head';
import Search from '../Components/Search';

import { useContext, useEffect, useState } from 'react';
import { darkmodeContext } from '../Components/Layout';
const Home = ({posts}) => {
const [darkmode, setDarkmode] = useContext(darkmodeContext)
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

  


  // useEffect
  useEffect(() => {
    // data matched and search
    const title = posts.filter((post) => post.slug.toLowerCase().includes(val.toLowerCase()));
    setFilterData(title);
  },[val])


  
  try{
    return (
      <>
      <Head>
          <title>হোম | শাকিল বাবুর ঝুলি</title>
          <link rel="stylesheet" href="../public/favicon.io" />
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
                     <h4 className={darkmode ? 'error lightColor':'error darkColor'}>দুঃখিত ! {val} নামে কোনো আরটিকেল পাওয়া যায় নি । </h4>
                  )
                }
              </div>
          </section>
      </>
    )
  } catch(e){
    return null; 
  }
}

export default Home ; 


// getStaticProps
export const getStaticProps= async () => {
  
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
