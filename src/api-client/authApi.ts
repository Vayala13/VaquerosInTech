
import { AuthControllerApi } from '../api/generated/apis/AuthControllerApi';
import { apiConfig } from './apiConfig';

const authApi = new AuthControllerApi(apiConfig);

export const login = (data: any) => authApi.login({ loginRequest: data });
export const register = (data: any) => authApi.register({ registerRequest: data });

export { authApi };
