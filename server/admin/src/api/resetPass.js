import axiosInstance from '../utils/axios';

const reset_password_api = (data) => {
  return axiosInstance.put(`/auth/reset/${data.tokenReset}`, data.password);
};

export { reset_password_api };
