import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router";

const StoreProductsInternal = [
  {
    id: 1, 
    url: "/product/1",
    image: "./products/tenis-nike.png", 
    name: "Nike Air Force One", 
    brand: "Nike", 
    gender: "Masculino", 
    category: "Casual", 
    discount: 40, 
    price: 400, 
    current_price: 240,
    rating: 4.9,
    rating_count: 120,
    reference: "39489931"
  },
  {
    id: 2, 
    url: "/product/2",
    image: "./products/tenis-kswis.png", 
    name: "K-Swiss V8", 
    brand: "K-Swiss", 
    gender: "Masculino", 
    category: "Tênis", 
    discount: 50, 
    price: 500, 
    current_price: 250,
    rating: 4.8,
    rating_count: 105,
    reference: "13370882"
  },
  {
    id: 3, 
    url: "/product/3",
    image: "./products/tenis-adidas.png", 
    name: "Adidas Tensaur Run", 
    brand: "Adidas", 
    gender: "Masculino", 
    category: "Utilitário", 
    discount: 10, 
    price: 250, 
    current_price: 225,
    rating: 4.5,
    rating_count: 90,
    reference: "40239100"
  },
  {
    id: 4, 
    url: "/product/4",
    image: "./products/tenis-air-jordan.png", 
    name: "Nike Air Jordan", 
    brand: "Nike", 
    gender: "Masculino", 
    category: "Corrida", 
    discount: 20, 
    price: 1000, 
    current_price: 800,
    rating: 5.0,
    rating_count: 80,
    reference: "23600459"
  },
  {
    id: 5, 
    url: "/product/5",
    image: "./products/tenis-own-the-game.png", 
    name: "Adidas Own The Game", 
    brand: "Adidas", 
    gender: "Masculino", 
    category: "Corrida", 
    discount: 25, 
    price: 800, 
    current_price: 600,
    rating: 4.3,
    rating_count: 130,
    reference: "75419982"
  },
  {
    id: 6, 
    url: "/product/6",
    image: "./products/tenis-puma.png", 
    name: "Puma Runner", 
    brand: "Puma", 
    gender: "Unissex", 
    category: "Esporte e lazer", 
    discount: 60, 
    price: 425, 
    current_price: 170,
    rating: 4.6,
    rating_count: 85,
    reference: "33948123"
  },
  {
    id: 7, 
    url: "/product/7",
    image: "./products/tenis-nike-feminino.png", 
    name: "Nike Air Max", 
    brand: "Nike", 
    gender: "Feminino", 
    category: "Casual", 
    discount: 20, 
    price: 400, 
    current_price: 320,
    rating: 5.0,
    rating_count: 150,
    reference: "12399801"
  },
  {
    id: 8, 
    url: "/product/8",
    image: "./products/tenis-kswis-speedster.png", 
    name: "K-Swiss Speedster", 
    brand: "K-Swiss", 
    gender: "Unissex", 
    category: "Utilitário", 
    discount: 25, 
    price: 200, 
    current_price: 150,
    rating: 4.2,
    rating_count: 50,
    reference: "99934512"
  }
];

function ProductListing({isHome}) {
  if (!typeof isHome == "boolean") isHome = false;
  return (
      <>
        <div className="store-background-content p-5">
          {isHome && (<p className="store-highlight-collection3-title">Produtos em alta</p>)}
          <Row xs={1} sm={1} md={3} lg={4}>
            {StoreProductsInternal.map(product => (
              <Col>
                <Link to={product.url}>
                  <div className="store-highlight-collection3-product mb-5">
                    <p className="store-highlight-collection3-discount badge rounded-pill p-2">{product.discount}% OFF</p>
                    <img src={product.image} />
                    <p className="store-highlight-collection3-category">{product.category}</p>
                    <p className="store-highlight-collection3-name">{product.name} - {product.gender}</p>
                    <p className="store-highlight-collection3-price"><span>R${product.price},00</span> R${product.current_price},00</p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </>
  )
}

export default ProductListing;
export const StoreProducts = StoreProductsInternal;
