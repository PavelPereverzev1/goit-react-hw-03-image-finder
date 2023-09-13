import { Circles } from 'react-loader-spinner';
import { Container } from './Loader.styled';
const Loader = () => {
  return (
    <Container>
      <Circles
        height="80"
        width="80"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        color="#3f51b5"
      />
    </Container>
  );
};

export default Loader;
