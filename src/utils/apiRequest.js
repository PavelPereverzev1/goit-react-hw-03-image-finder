import axios from 'axios';

export const apiRequest = (searchString, currentPage) => {
  const params = {
    key: '36886020-caa7fcb6aed092db9a00b851c',
    q: searchString,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 12,
  };
  return axios.get('https://pixabay.com/api/', { params });
};
