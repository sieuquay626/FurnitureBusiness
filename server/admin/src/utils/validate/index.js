import _ from 'lodash';
export const phone = /^[0][0-9]{9,10}$/g;
export const phoneType = (value) => {
  if (value) {
    let text = value.replace(/ /g, '');

    // return /^(([(][+][8][4][)])|([+][8][4])|[0])[0-9]{9,10}$/g.test(text);
    // return PHONE_REGEX_NEW.test(text);
    if (!/^(([(][+][8][4][)])|([+][8][4])|[0])[0-9]{9,10}$/g.test(text)) {
      return false;
    }
  }

  return true;
};

export const passwordType = (value) => {
  if (value) {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;
    if (_.isEmpty(passRegex.exec(value))) return false;
  }
  return true;
};
