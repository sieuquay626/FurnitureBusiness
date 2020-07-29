import axiosInstance from '../utils/axios';

const recover_password_api = (data, token) => {
  return axiosInstance.post('/auth/reset/', data);
};

export { recover_password_api };
