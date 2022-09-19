import axios from 'axios';
// import store from '../store.js';
// import actions from './errorsSlice.js';
// import actionsLoading from './loadingSlice.js';
import CONFIG from './config.js';

const restService = (path) => {
  const apiUrl = `${CONFIG.API_HOST}/${path}`;

  const request = async (method, params) => {

    // console.log(axios[method](apiUrl, config));
    // dispatch(actionsLoading.setLoading());
    // console.log()
    const responseApi = await axios[method](apiUrl, params);
    const {data} = responseApi;

    return evaluateResponse(data.data, data.error);
  };
  
  const find = async () => {
    const response = await request();

    return response;
  };

  const create = async (body) => {
    const response = await request('post', body);

    return response;
  };

  return {find, create};

  function evaluateResponse (data, error) {
    // dispatch(actionsLoading.setLoading());

    if (Object.keys(error).length > 0) {
      // dispatch(actions.openModal());
      // dispatch(actions.setErrors(error));
    }
    
    return data;
  }
};

export default restService;
