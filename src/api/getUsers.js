import axiosInstance from './axiosInstance';

export const getUsers = async (page) => {
  try {
    const { data } = await axiosInstance.get('/users', {
      params: {
        page,
      },
    });

    return data;
  } catch (error) {
    throw new Error();
  }
};
