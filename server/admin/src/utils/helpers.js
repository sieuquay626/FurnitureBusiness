import queryString from 'query-string';

export const convertQueyString = (obj) => {
  return queryString.stringify(obj, {
    skipNull: true,
    skipEmptyString: true,
  });
};

export const parseJwt = (token) => {
  try {
    let base64 = token.split(' ')[1].split('.')[1];
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          console.log('c', c);
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (err) {
    return null;
  }
};

export const replaceTiengVietCoDau = (text) => {
  if (text && typeof text === 'string' && text.length > 0) {
    return text
      .replace(/[Ắ|Ằ|Ẳ|Ẵ|Ặ|Ă|Ấ|Ầ|Ẩ|Ẫ|Ậ|Â|Á|À|Ã|Ả|Ạ]/g, 'A')
      .replace(/[ắ|ằ|ẳ|ẵ|ặ|ă|ấ|ầ|ẩ|ẫ|ậ|â|á|à|ã|ả|ạ]/g, 'a')
      .replace(/[Đ]/g, 'D')
      .replace(/[đ]/g, 'd')
      .replace(/[Ế|Ề|Ể|Ễ|Ệ|Ê|É|È|Ẻ|Ẽ|Ẹ]/g, 'E')
      .replace(/[ế|ề|ể|ễ|ệ|ê|é|è|ẻ|ẽ|ẹ]/g, 'e')
      .replace(/[Í|Ì|Ỉ|Ĩ|Ị]/g, 'I')
      .replace(/[í|ì|ỉ|ĩ|ị]/g, 'i')
      .replace(/[Ố|Ồ|Ổ|Ỗ|Ộ|Ô|Ớ|Ờ|Ở|Ỡ|Ợ|Ơ|Ó|Ò|Õ|Ỏ|Ọ]/g, 'O')
      .replace(/[ố|ồ|ổ|ỗ|ộ|ô|ớ|ờ|ở|ỡ|ợ|ơ|ó|ò|õ|ỏ|ọ]/g, 'o')
      .replace(/[Ứ|Ừ|Ử|Ữ|Ự|Ư|Ú|Ù|Ủ|Ũ|Ụ]/g, 'U')
      .replace(/[ứ|ừ|ử|ữ|ự|ư|ú|ù|ủ|ũ|ụ]/g, 'u')
      .replace(/[Ý|Ỳ|Ỷ|Ỹ|Ỵ]/g, 'Y')
      .replace(/[ý|ỳ|ỷ|ỹ|ỵ]/g, 'y');
  } else {
    return text;
  }
};
