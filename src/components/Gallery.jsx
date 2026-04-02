import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const CarouselHomeProducts = [
  {
    id: 1,
    image: "./products/tenis-nike.png",
    title: "Queima de estoque Nike 🔥", 
    subtitle: "Melhores ofertas personalizadas",
    button_href: "#/product/1",
    button_id: "button-carousel-slide1",
    button_label: "Ver\u00A0Ofertas"
  },
  {
    id: 2,
    image: "./products/tenis-kswis.png",
    title: "Sinal Vermelho K-Swiss V8 🔴", 
    subtitle: "Edição limitada",
    button_href: "#/product/2",
    button_id: "button-carousel-slide2",
    button_label: "Ver\u00A0Ofertas"
  },
  {
    id: 3,
    image: "./products/tenis-adidas.png",
    title: "Coleção Tênis Adidas 2026 🏃", 
    subtitle: "Novidades imperdíveis",
    button_href: "#/product/3",
    button_id: "button-carousel-slide3",
    button_label: "Ver\u00A0Coleção"
  },
  {
    id: 4,
    image: "./products/tenis-air-jordan.png",
    title: "Promoção Air Jordans 🥾", 
    subtitle: "Edição Colecionador",
    button_href: "#/product/4",
    button_id: "button-carousel-slide4",
    button_label: "Ver\u00A0Promoção"
  }
];

function Gallery() {
  return (
      <>
        <div className="store-background-content p-5">
          <Carousel fade controls={false} interval={4000} touch={true} className="store-carousel-indicator">
            {CarouselHomeProducts.map(product => (
              <Carousel.Item>
                <Row xs={1} sm={1} md={1} lg={2}>
                  <Col xs={{order: 2}} sm={{order: 2}} md={{order: 2}} lg={{order: 1}}>
                    <p className="store-carousel-subtitle">{product.subtitle}</p>
                    <p className="store-carousel-title">{product.title}</p>
                    <p className="store-carousel-description">Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod nure consectetur.</p>
                    <Button href={product.button_href} id={product.button_id} className="store-button-primary">{product.button_label}</Button>
                  </Col >
                  <Col xs={{order: 1}} sm={{order: 1}} md={{order: 1}} lg={{order: 2}}>
                    <img src={product.image} className="store-carousel-image" />
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </>
  )
}

export default Gallery;
