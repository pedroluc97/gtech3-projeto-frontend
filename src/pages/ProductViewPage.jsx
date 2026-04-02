import Layout from './Layout';
import ProductListing from '../components/ProductListing';
import { StoreProducts } from '../components/ProductListing';
import NotFound from './NotFound';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ProductViewPage() {
    const {product_id} = useParams();
    if (!StoreProducts.some(product => product.id === parseInt(product_id))) return (<NotFound />)
    const id = product_id - 1;
    return (
        <Layout>
            <div className="p-5 store-background-content">
                <Row>
                    <p className="store-product-view-route">Home / Produtos / {StoreProducts[id].category} / {StoreProducts[id].brand}/ {StoreProducts[id].name} - {StoreProducts[id].gender}</p>
                </Row>
                <Row xs={1} sm={1} md={1} lg={2}>
                  <Col>
                    <img src={StoreProducts[id].image} className="store-product-view-image" />
                  </Col>
                  <Col>
                    <p className="store-product-view-name">{StoreProducts[id].name} - {StoreProducts[id].gender}</p>
                    <p className="store-product-view-details">{StoreProducts[id].category} | {StoreProducts[id].brand} | &#9733; {StoreProducts[id].rating.toFixed(1)} / 5.0 ({StoreProducts[id].rating_count} avaliações) | REF: {StoreProducts[id].reference}</p>
                    <p className="store-product-view-price"><span>R${StoreProducts[id].current_price},00</span> R${StoreProducts[id].price},00</p>
                    <p className="store-product-view-description"><span>Descrição do produto</span><br />Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                    minim veniam, quis nostrud exercitation ullamco.</p>
                    <Button id="button-buy" className="store-button-primary p-2">Comprar</Button>
                  </Col>
                </Row>
            </div>
            <div className="p-5 store-background-content">
              <ProductListing />
            </div>
        </Layout>
    )
}

export default ProductViewPage;
