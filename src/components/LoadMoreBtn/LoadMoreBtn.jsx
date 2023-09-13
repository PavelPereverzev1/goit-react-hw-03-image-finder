import { Container } from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <Container>
      <button type="button" className="button" onClick={handleLoadMore}>
        Load more
      </button>
    </Container>
  );
};

export default LoadMoreBtn;
