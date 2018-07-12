import fetch from 'node-fetch';
// import config from '../config'
const options = {
  method: 'GET',
  credentials: 'same-origin',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  }
};

export default function fetchData(url, data, method,token) {
  let queryUrl = '/api/' + url;
  if ((!method || method === 'GET') && data) {
    queryUrl = `${queryUrl}?${Object
      .keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')}`;
  }
  if(token){
    options.headers.Authorization = `jwt ${token}` 
    options.method = method
  }
  return new Promise((resolve, reject) => {
    let opt = {
      ...options,
      method,
      body: JSON.stringify(data)
    };
    if (!method || method === 'GET') delete opt.body;
    fetch(queryUrl, opt).then(res => {
      if (res.status == 200 || res.status == 201) {
        if (!res.json) {
          reject({
            code: 'Ops',
            message: 'server error!'
          });
        }
        res.json().then(json => {
          resolve(json);
        });
      } else {
        reject({
          code: 'Ops',
          message: 'server error!'
        });
      }
    }).catch(err => {
      reject(err);
    });
  });
};
