import MyHead from '../components/head'
import Header from '../components/Layout/Header'
import NavBar from '../components/Layout/NavBar'
import SideBar from '../components/Layout/SideBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <MyHead />
    <NavBar/>
    <Header/>
    <SideBar/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
