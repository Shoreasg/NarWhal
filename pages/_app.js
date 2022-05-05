import MyHead from '../components/head'
import SideBar from '../components/sidebar/SideBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(<>
    <MyHead />
    <SideBar/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
