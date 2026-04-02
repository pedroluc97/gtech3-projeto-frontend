import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CollectionHighlightedProducts = [
  {
    id: 1,
    image: "./collection-1.png",
    discount: "40",
    button_id: "button-carousel-slide1"
  },
  {
    id: 2,
    image: "./collection-2.png",
    discount: "30",
    button_id: "button-carousel-slide2"
  },
  {
    id: 3,
    image: "./collection-3.png",
    discount: "25",
    button_id: "button-carousel-slide3"
  }
];

function ProductCollections() {
  return (
      <>
        <div className="store-background-content p-5">
          <p className="store-highlight-collection1-title">Coleções em destaque</p>
          <Row xs={1} sm={1} md={2} lg={3}>
            {CollectionHighlightedProducts.map(collection => (
              <Col>
                <div className="store-highlight-collection1-product mb-5">
                  <p className="store-highlight-collection1-discount badge rounded-pill p-2">{collection.discount}% OFF</p>
                  <img src={collection.image} />
                  <Button id={collection.button_id}>Comprar</Button>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </>
  )
}

export default ProductCollections;
