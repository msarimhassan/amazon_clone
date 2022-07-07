import { create } from 'apisauce';

//  const baseURL = 'https://amazon-clone-12345.herokuapp.com/api/';

const baseURL = 'http://192.168.10.5:8080/api/';
const client = create({
    baseURL,
});

export const config = async () => {
    const token = localStorage.getItem('AC-Token');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    };
};
export const authConfig = async (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    };
};

export const multipartConfig = async () => {
    const token = localStorage.getItem('AC-Token');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'multipart/form-data',
        },
    };
};

export default client;
