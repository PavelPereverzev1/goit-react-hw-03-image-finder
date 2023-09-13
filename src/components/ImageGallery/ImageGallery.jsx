import { Component } from 'react';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';

class ImageGalery extends Component {
  state = {
    isModalOpen: false,
    selectedImgURL: '',
    selectedImgtags: '',
  };

  openModal = (tags, largeImageURL) => {
    this.setState({
      isModalOpen: true,
      selectedImgURL: largeImageURL,
      selectedImgtags: tags,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { selectedImgURL, selectedImgtags } = this.state;
    return (
      <>
        <Gallery className="gallery">
          {this.props.images.map(
            ({ id, webformatURL, tags, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  url={webformatURL}
                  description={tags}
                  onClick={() => this.openModal(tags, largeImageURL)}
                />
              );
            }
          )}
        </Gallery>
        {this.state.isModalOpen && (
          <Modal
            url={selectedImgURL}
            tags={selectedImgtags}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default ImageGalery;

ImageGalery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};
