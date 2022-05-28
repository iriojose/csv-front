import {Container, Spinner} from 'react-bootstrap'
import '../index.css';

function Loader() {
    return (
        <Container className='container'>
            <Spinner className='spinner' animation="grow" />
        </Container>
    )
}

export default Loader;