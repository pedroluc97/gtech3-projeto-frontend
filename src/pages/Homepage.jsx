import Layout from './Layout';
import Gallery from '../components/Gallery';
import ProductListing from '../components/ProductListing';
import ProductCollections from '../components/ProductCollections';
import ProductCategories from '../components/ProductCategories';
import ProductOffer from '../components/ProductOffer';

function Homepage() {
  return (
      <Layout>
        <Gallery />
        <ProductCollections />
        <ProductCategories />
        <ProductListing isHome={true} />
        <ProductOffer />
      </Layout>
  )
}

export default Homepage;
