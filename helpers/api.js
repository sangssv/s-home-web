import axios from 'axios';

const api = {
  get: (url) => {
    return axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }
};

export default api;