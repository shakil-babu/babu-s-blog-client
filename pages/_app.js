import Layout from '../Components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  try{
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
)
  }catch(e){
    return null; 
  }
}

export default MyApp;

