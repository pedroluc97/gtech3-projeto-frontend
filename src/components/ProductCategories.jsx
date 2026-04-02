import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CollectionProductCategories = [
  {
    id: 1,
    image: "./categories/icon-camisa.png",
    name: "Camisetas", 
  },
  {
    id: 2,
    image: "./categories/icon-calca.png",
    name: "Calças", 
  },
  {
    id: 3,
    image: "./categories/icon-bone.png",
    name: "Bonés", 
  },
  {
    id: 4,
    image: "./categories/icon-fones.png",
    name: "Headphones", 
  },
  {
    id: 5,
    image: "./categories/icon-tenis.png",
    name: "Tênis", 
  }
];

function ProductCategories() {
  return (
      <>
        <div className="store-background-content p-5">
          <p className="store-highlight-collection2-title">Categorias em destaque</p>
          <Row xs={2} sm={2} md={3} lg={5}>
            {CollectionProductCategories.map(category => (
              <Col>
                <div className="store-highlight-collection2-category mb-5">
                  <img src={category.image} />
                  <p>{category.name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </>
  )
}

export default ProductCategories;
