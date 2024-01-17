import axiosInstance from './axiosInstance';

export const deleteUser = async (id) => {
  try {
    await axiosInstance.delete(`/users/${id}`);
  } catch (error) {
    throw new Error();
  }
};
