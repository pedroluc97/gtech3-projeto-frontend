import Layout from './Layout';
import Button from 'react-bootstrap/Button';

function NotFound() {
  return (
      <Layout>
        <div className="store-background-content p-5 d-flex justify-content-center">
            <h1>Página não encontrada!</h1>
        </div>
        <div className="store-background-content p-5 d-flex justify-content-center">
            <h2>Loja ainda em construção, volte mais tarde!</h2>
        </div>
        <div className="store-background-content p-5 d-flex justify-content-center">
            <Button href="#/" id="button-home-return" className="store-button-primary p-2">Voltar</Button>
        </div>
      </Layout>
  )
}

export default NotFound;
