import axios from 'axios';

export const getGithub = () => {
  return {
    type: 'GET_GITHUB',
    payload: axios.get ('https://api.github.com/search/repositories?q=express'),
  };
};
