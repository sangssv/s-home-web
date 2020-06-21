import loadScript from 'load-script';

let initialized = false;
let queue = [];

export function fb(callback) {
  if (initialized) {
    callback(window.FB);
  } else {
    queue.push(callback);
    if (!window.fbAsyncInit) {
      window.fbAsyncInit = () => {
        window.FB.init({
          xfbml: true,
          version: 'v7.0'
        });
        initialized = true;
        queue.forEach(cb => cb(window.FB));
        queue = null;
      };
      const script = window.localStorage.getItem('fb:debug') === 'true'
        ? 'xfbml.customerchat/debug.js'
        : 'xfbml.customerchat.js';
      loadScript(`https://connect.facebook.net/en_US/sdk/${script}`, { async: true });
    }
  }
}