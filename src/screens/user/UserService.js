import axiosInstance from '../../utils/axios';
import constants from '../../utils/constans';

export const login = async (email, password) => {
    const data= {email, password};
    const response = await axiosInstance.post(constants.API_LOGIN, data);
    return response;
}
export const register = async (email, password, confirm_password) => {
    const data= {email, password, confirm_password};
    const response = await axiosInstance.post(constants.API_REGISTER, data);
    return response;
}