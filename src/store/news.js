import api from '../api/api.js';

export const state = {
  news: []
};

export const getters = {
  getNews: state => state.news,
  getNewsDetail: state => slug => state.news.find(news => news.slug === slug)
};

export const mutations = {
  SET_NEWS(state, news) {
    state.news = news;
  }
};

export default function createSlug(title) {
  let slug = "";
  const validChars = "abcdefghijklmnopqrstuvwxyz0123456789- ";
  const lowercaseTitle = title.toLowerCase();

  for (let i = 0; i < lowercaseTitle.length; i++) {
    const char = lowercaseTitle[i];
    if (validChars.includes(char)) {
      slug += char;
    } else if (char === " ") {
      slug += "-";
    }
  }

  return slug.trim();
}

export const actions = {
  async fetchNews({ commit }) {
    try {
      const response = await api.getNews();
      const newsWithSlug = response.data.articles.map(news => ({
        ...news,
        slug: createSlug(news.title)
      }));
      commit('SET_NEWS', newsWithSlug);
    } catch (error) {
      console.log(error);
    }
  },
  async  fetchNewsBySlug({ getters }, slug) {
    const existingNews = getters.getNewsDetail(slug);
    if (existingNews) {
      return Promise.resolve(existingNews);
    } else {
      try {
        const response = await api.getNewsDetail(slug);
        return response.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }
};
