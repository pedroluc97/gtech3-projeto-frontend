import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import StoreProductOffer from '/products/oferta-air-jordan.png';

function ProductOffer() {
  return (
      <>
        <div className="store-background-content p-5">
          <Row xs={1} sm={1} md={1} lg={2} className="store-highlight-collection4-offer">
            <Col>
              <img src={StoreProductOffer} text="Oferta especial" className="store-highlight-collection4-offer-imagem" />
            </Col>
            <Col>
              <p className="store-carousel-subtitle">Oferta especial</p>
              <p className="store-carousel-title">Air Jordan edição de colecionador</p>
              <p className="store-carousel-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Button href="#/product/4" id="button-offer" className="store-button-primary">Ver&nbsp;Oferta</Button>
            </Col>
          </Row>
        </div>
      </>
  )
}

export default ProductOffer;
