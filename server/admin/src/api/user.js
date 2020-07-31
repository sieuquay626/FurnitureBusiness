import axiosInstance from '../utils/axios';
import { convertQueyString } from '../utils/helpers';

const listUser_api = (data) => {
  return axiosInstance.get(`/auth/pgs/?${convertQueyString(data)}`);
};

const createUser_api = (data) => {
  return axiosInstance.post(`/auth/?${convertQueyString(data)}`);
};

const deleteUser_api = (id) => {
  return axiosInstance.delete(`/auth/${id}`);
};

const detailUser_api = (id) => {
  return axiosInstance.get(`/auth/${id}/`);
};

const updateUser_api = (id) => {
  return axiosInstance.put(`/auth/${id}/`);
};

export {
  listUser_api,
  createUser_api,
  deleteUser_api,
  detailUser_api,
  updateUser_api,
};
