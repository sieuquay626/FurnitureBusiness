import axiosInstance from '../utils/axios';
import { convertQueyString } from '../utils/helpers';

const listCategory_api = () => {
  return axiosInstance.get(`/category`);
};

export { listCategory_api };
