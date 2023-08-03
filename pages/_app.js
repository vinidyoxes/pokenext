import '../styles/globals.css'
import Layout from '../components/MainContainer/Layout'
import  "../fonts/fonts.css"



function MyApp({ Component, pageProps }) {
  return <Layout>
             <Component {...pageProps} />
       </Layout>
}

export default MyApp
