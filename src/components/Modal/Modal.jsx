import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay } from './Modal.styled';

class Modal extends Component {
  componentDidMount = () => {
    document.addEventListener('keydown', this.handleClose);
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    if (e.target === e.currentTarget || e.key === 'Escape')
      this.props.closeModal();
  };

  render() {
    const { url, tags } = this.props;
    return (
      <Overlay className="overlay" onClick={this.handleClose}>
        <div className="modal">
          <img src={url} alt={tags} />
        </div>
      </Overlay>
    );
  }
}

export default Modal;

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
