import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import { apiRequest } from 'utils/apiRequest';
import { errorMsg } from 'utils/notification';
import ImageGalery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

class App extends Component {
  state = {
    searchString: '',
    currentPage: 1,
    images: [],
    isLoading: false,
    totalHits: 0,
  };

  handleSubmit = searchString => {
    this.setState({
      searchString,
      currentPage: 1,
      images: [],
      totalHits: 0,
    });
  };

  componentDidUpdate = async (_, prevState) => {
    const { searchString, currentPage } = this.state;
    if (
      prevState.currentPage === currentPage &&
      prevState.searchString === searchString
    ) {
      return;
    }
    this.setState({ isLoading: true });
    try {
      const response = await apiRequest(searchString, currentPage);
      if (response.data.hits.length === 0) {
        errorMsg(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }
      this.setState({
        images: [...this.state.images, ...response.data.hits],
        totalHits: response.data.totalHits,
      });
    } catch {
      errorMsg('Something went wrong try again');
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  handleLoadMore = () => {
    this.setState(prev => {
      return { currentPage: prev.currentPage + 1 };
    });
  };

  render() {
    const { isLoading, images, totalHits } = this.state;
    return (
      <>
        <SearchBar handleSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGalery images={images} />
        {images.length < totalHits && (
          <LoadMoreBtn handleLoadMore={this.handleLoadMore} />
        )}
      </>
    );
  }
}

export default App;
