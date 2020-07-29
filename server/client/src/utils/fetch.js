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
  let totalItem = 0;
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
    .then((res) => {
      clearTimeout();
      if (res.status === 200) {
        totalItem = res.headers.get('x-total-count');
        if (res != null) {
          return res.json();
        }
        return res;
      }

      if (res.status === 201) {
        return true;
      }
      if (res.status === 400) {
        return res.json();
      }
      return false;
    })
    .then((responseJson) => {
      clearTimeout(timeout);
      const dataResponse = {
        data: responseJson,
        total: totalItem,
      };
      console.log(fetchURL, dataResponse);
      resolve(dataResponse);
    })
    .catch((error) => {
      clearTimeout();
      reject(error);
    });
}
