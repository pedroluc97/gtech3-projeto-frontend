import React from 'react';
import Logo from './Logo';
import IconCart from '/assets/mini-cart.svg'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalFunctionUnavailable(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Digital Store
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Informação</h4>
        <p>Função indisponível! Loja ainda está em construção!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="store-button-primary">Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Header() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Navbar expand="lg" className="store-background-header bg-body-tertiary p-5 pt-2">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-auto" />
        <Stack direction="vertical">
            <Stack direction="horizontal">
              <Navbar.Brand href="#/" className="p-2"><Logo /></Navbar.Brand>
              <InputGroup className="w-50">
                <Form.Control
                  placeholder="Pesquisar produto..."
                  aria-label="Pesquisa de produto"
                  className="store-background-search-bar d-none d-lg-block"
                />
                <Button variant="light" id="button-product-search-lg" onClick={() => setModalShow(true)} className="store-background-search-bar d-none d-lg-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>
                </Button>
              </InputGroup>
              <Nav.Link onClick={() => setModalShow(true)} className="store-navlink p-2 text-decoration-underline d-none d-lg-block">Cadastre-se</Nav.Link>
              <Button id="button-login" onClick={() => setModalShow(true)} className="store-button-primary p-2 d-none d-lg-block">Entrar</Button>
              <div className="m-2 position-relative">
                <Nav.Link onClick={() => setModalShow(true)}><img src={IconCart} alt="Carrinho" /></Nav.Link>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle store-background-cart-number">3</span>
              </div>
            </Stack>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto p-2">
                <Nav.Link href="#/" className="store-navlink">Home</Nav.Link>
                <Nav.Link href="#/products" className="store-navlink">Produtos</Nav.Link>
                <Nav.Link href="#/categorias" className="store-navlink">Categorias</Nav.Link>
                <Nav.Link href="#/meus-pedidos" className="store-navlink">Meus&nbsp;Pedidos</Nav.Link>
                <InputGroup>
                  <Form.Control
                    placeholder="Pesquisar produto..."
                    aria-label="Pesquisa de produto"
                    className="store-background-search-bar d-lg-none"
                  />
                  <Button variant="light" id="button-product-search" onClick={() => setModalShow(true)} className="store-background-search-bar d-lg-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                  </Button>
                </InputGroup>
                <Nav.Link onClick={() => setModalShow(true)} className="store-navlink d-lg-none">Cadastre-se</Nav.Link>
                <Nav.Link onClick={() => setModalShow(true)} className="store-navlink d-lg-none">Entrar</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Stack>
      </Navbar>
      <ModalFunctionUnavailable
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Header;
