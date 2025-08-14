
import { HomeControllerApi } from '../api/generated/apis/HomeControllerApi';
import { apiConfig } from './apiConfig';

const homeApi = new HomeControllerApi(apiConfig);

export const getHome = () => homeApi.home();

export { homeApi };
