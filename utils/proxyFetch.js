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

export default function fetchData(url, data, method) {
  let queryUrl = 'http://localhost:3002/api/' + url;
  if ((!method || method === 'GET') && data) {
    queryUrl = `${queryUrl}?${Object
      .keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')}`;
  }
  return new Promise((resolve, reject) => {
    let opt = {
      ...options,
      method,
      body: JSON.stringify(data)
    };
    console.log(queryUrl,'queryUrl');
    if (!method || method === 'GET') delete opt.body;
    fetch(queryUrl, opt).then(res => {
      console.log(res,'res')
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
