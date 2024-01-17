import axiosInstance from './axiosInstance';

export const createUser = async (user) => {
  try {
    const { data } = await axiosInstance.post('/users', user);

    return data;
  } catch (error) {
    throw new Error();
  }
};
