import axiosInstance from 'apis/setting';

export const boardWriteSubmit = async (formData, selectedHost, selectedBoard, navigate) => {
  try {
    const res = await axiosInstance.post('/boards', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(formData);
    console.log('Server response:', res.data);

    const url = `/board/${selectedHost}/${selectedBoard}`;
    navigate(url);
  } catch (error) {
    console.error('Error creating post: ', error);
  }
};