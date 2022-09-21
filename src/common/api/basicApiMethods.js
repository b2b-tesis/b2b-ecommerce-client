import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLoading } from '../state/loading/loadingSlice.js';
// import store from '../store.js';
// import actions from './errorsSlice.js';
// import actionsLoading from './loadingSlice.js';
import CONFIG from './config.js';

const restService = (path) => {
  const apiUrl = `${CONFIG.API_HOST}/${path}`;
  const dispatch = useDispatch();

  const request = async (method, body) => {

    // dispatch(actionsLoading.setLoading());
    dispatch(setLoading());
    try{
      const {data} = await axios[method](apiUrl, body);
      // const {data} = responseApi;
      dispatch(setLoading());
    } catch(err){
      dispatch(setLoading());
    }

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
