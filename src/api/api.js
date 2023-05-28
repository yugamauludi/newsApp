import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2'
});

export default {
  getNews() {
    return api.get('/everything?q=esports&apiKey=40b6016c78a1479a84e6001133e388e4');
  },
  getNewsDetail(slug) {
    return api.get(`/news/${slug}`);
  }
};
