
import { UserInfoControllerApi } from '../api/generated/apis/UserInfoControllerApi';
import { apiConfig } from './apiConfig';

const userInfoApi = new UserInfoControllerApi(apiConfig);

export const getAllUsers = () => userInfoApi.getAllUsers();
export const getUserById = (id: number) => userInfoApi.getUserById({ id });
export const createUser = (data: any) => userInfoApi.createUser({ registerRequest: data });
export const updateUser = (id: number, data: any) => userInfoApi.updateUser({ id, registerRequest: data });
export const deleteUser = (id: number) => userInfoApi.deleteUser({ id });

export { userInfoApi };
