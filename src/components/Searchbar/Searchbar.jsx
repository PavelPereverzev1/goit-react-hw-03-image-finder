import { Component } from 'react';
import PropTypes from 'prop-types';
import { errorMsg } from 'utils/notification';
import { Header } from './Searchbar.styled';

class SearchBar extends Component {
  state = {
    queryValue: '',
  };

  handleInputChange = e => {
    this.setState({
      queryValue: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { queryValue } = this.state;
    if (queryValue.trim() === '') {
      errorMsg(`You cannot search an empty string.`);
      return;
    }
    this.props.handleSubmit(queryValue.trim());
    this.setState({ queryValue: '' });
  };

  render() {
    return (
      <Header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            name="queryValue"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.queryValue}
            onChange={this.handleInputChange}
          />
        </form>
      </Header>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
