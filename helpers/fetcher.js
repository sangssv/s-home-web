import fetch from 'node-fetch';

const serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};

const fetcher = {
  _sendRequest(url, data, method) {
    const ajax = () => {
      const sendRequest = () => {
        const options = {
          method,
          mode: 'cors',
        };

        let queryString = '';
        if (method === 'GET') {
          queryString = data ? '?' + serialize(data) : '';
        } else {
          options.body = JSON.stringify(data);
          options.headers['Content-Type'] = 'application/json';
        }

        return fetch(url + queryString, options)
          .then(response => {
            if (!response.ok) {
              // throw new Error("Bad response from server");
              return response.json().then(error => Promise.reject(error));
            }
            return response;
          })
          .then(response => {
            const contentType = response.headers.get('Content-type');
            if (contentType && contentType.indexOf('application/json') > -1) {
              return response.json();
            }
            // Use USVString by default
            return response.text();
          })
          .then(json => {
            return json;
          });
      };

      return sendRequest().then(
        success => {
          return success;
        },
        error => {
          return Promise.reject(error);
        },
      );
    };

    return ajax();
  },

  get(url, { data } = {}) {
    return this._sendRequest(
      process.env.CRM_ENDPOINT + url,
      data,
      'GET',
    );
  },
};

export default fetcher;