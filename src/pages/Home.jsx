import Footer from '../components/Footer'
import Banner from './Banner'
import BestSellers from './BestSellers'
import Category from './Category'
import Collections from './Collections'
import Newsletters from './Newsletters'
import Products from './Products'

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Collections />
      <BestSellers />
      <Newsletters />
      <Footer />
    </div>
  )
}
export default Home
