import LogoFooter from '/assets/logo-footer.svg';
import IconFacebook from '/assets/facebook.svg';
import IconInstagram from '/assets/instagram.svg';
import IconTwitter from '/assets/twitter.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <div className="store-background-footer">
        <Row className="m-0" xs={1} sm={1} md={1} lg={3}>
            <Col className="p-5">
                <Stack direction="vertical" gap={3}>
                    <img src={LogoFooter} alt="Logo Rodapé" width="253" height="44" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div>
                        <Stack direction="horizontal" gap={4}>
                            <Nav.Link href="https://www.facebook.com"><img src={IconFacebook} alt="Rede Social Facebook" className="store-navicon" /></Nav.Link>
                            <Nav.Link href="https://www.instagram.com"><img src={IconInstagram} alt="Rede Social Instagram" className="store-navicon" /></Nav.Link>
                            <Nav.Link href="https://www.twitter.com"><img src={IconTwitter} alt="Rede Social Twitter" className="store-navicon" /></Nav.Link>
                        </Stack>
                    </div>
                </Stack>
            </Col>
            <Col className="p-5">
                <Stack direction="horizontal" gap={5}>
                    <div>
                        <h5 className="font-weight-bold">Informação</h5>
                        <Nav.Link href="#/about" className="store-navlink"><p>Sobre&nbsp;Drip&nbsp;Store</p></Nav.Link>
                        <Nav.Link href="#/security" className="store-navlink"><p>Segurança</p></Nav.Link>
                        <Nav.Link href="#/wishlist" className="store-navlink"><p>Wishlist</p></Nav.Link>
                        <Nav.Link href="#/blog" className="store-navlink"><p>Blog</p></Nav.Link>
                        <Nav.Link href="#/work-with-us" className="store-navlink"><p>Trabalhe&nbsp;conosco</p></Nav.Link>
                        <Nav.Link href="#/my-cart" className="store-navlink"><p>Meus&nbsp;Pedidos</p></Nav.Link>
                    </div>
                    <div>
                        <h5 className="font-weight-bold">Categorias</h5>
                        <Nav.Link href="#/products/camisetas" className="store-navlink"><p>Camisetas</p></Nav.Link>
                        <Nav.Link href="#/products/calcas" className="store-navlink"><p>Calças</p></Nav.Link>
                        <Nav.Link href="#/products/bone" className="store-navlink"><p>Bonés</p></Nav.Link>
                        <Nav.Link href="#/products/headphones" className="store-navlink"><p>Headphones</p></Nav.Link>
                        <Nav.Link href="#/products/tenis" className="store-navlink"><p>Tênis</p></Nav.Link>
                        <p>&nbsp;</p>
                    </div>
                </Stack>
            </Col>
            <Col className="p-5">
                <Stack direction="vertical" gap={0}>
                    <h5 className="font-weight-bold">Contato</h5>
                    <p>
                        Av. Santos Dumont, 1510 - 1 andar - 
                        Aldeota, Fortaleza - CE, 60150-161
                    </p>
                    <p>(85) 3051-3411</p>
                </Stack>
            </Col>
        </Row>
        <hr />
        <p className="m-0 pb-3 text-center">&copy; 2026 Digital College</p>
    </div>
  );
}

export default Footer;
