import PropTypes from 'prop-types';
import { Item } from './ImageGaleryItem.styled';

const ImageGalleryItem = ({ url, description, onClick }) => {
  return (
    <Item className="gallery-item">
      <img src={url} alt={description} onClick={onClick} />
    </Item>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
