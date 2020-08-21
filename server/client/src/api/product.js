import axiosInstance from '../utils/axios';
import { convertQueyString } from '../utils/helpers';

const listProduct_api = () => {
  return axiosInstance.get(`/product`);
};

const listProductByCategory_api = (idCategory) => {
  return axiosInstance.get(`/category/${idCategory}`);
};

const listProductByRecomment_api = (idUser) => {
  console.log(idUser);
  return axiosInstance.post(`/rating/recomment`, { user: idUser });
};

export {
  listProduct_api,
  listProductByCategory_api,
  listProductByRecomment_api,
};
