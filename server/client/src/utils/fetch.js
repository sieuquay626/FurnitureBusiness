import * as API_STRING from '../constant/apiString';
const HEADERS = {
  Accept: 'application/json',
};

export default function fetch(path, method, headers = {}, body) {
  return new Promise((resolve, reject) => {
    startFetch(path, method, headers, body)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => reject(error));
  });
}

function startFetch(path, method, headers, body) {
  const timeout = setTimeout(() => {
    reject(new Error('Request API timeout.'));
  }, 30000);

  fetch(`${API_STRING.BASE_URL}/${path}`, {
    method,
    headers: {
      ...HEADERS,
      ...headers,
    },
    body: JSON.stringify(body),
  })
    .then((res) => resolve(res))
    .catch((error) => reject(error));
}
