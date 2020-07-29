import axiosInstance from '../utils/axios';
import { convertQueyString } from '../utils/helpers';

const listProduct_api = (data) => {
  return axiosInstance.get(`/product/pgs/?'${convertQueyString(data)}`);
};

const deleteProduct_api = (id) => {
  return axiosInstance.delete(`/product/${id}`);
};

const createProduct_api = (data) => {
  return axiosInstance.post('/product', data);
};

const detailProduct_api = (id) => {
  return axiosInstance.get(`/product/${id}/`);
};

const updateUser_api = (id) => {
  return axiosInstance.put(`/product/${id}/`);
};

export {
  listProduct_api,
  createProduct_api,
  deleteProduct_api,
  detailProduct_api,
  updateUser_api,
};
