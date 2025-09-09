
import axios from 'axios';
import { ProdEnv } from '../config/env';
import { isOnline, showNoInternetPopup } from '../utils/networkStatus';

const apiClient = axios.create({
  baseURL: ProdEnv?.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

apiClient.interceptors.request.use(
  (config) => {
    if (!isOnline()) {
      showNoInternetPopup();
      return Promise.reject(new axios.Cancel('No internet connection.'));
    }

    const auth_session = JSON.parse(sessionStorage.getItem('auth_session'));
    if (auth_session) {
      config.headers['Authorization'] = auth_session.token;
      config.headers['UserId'] = auth_session.UserId;
      config.headers['name'] = auth_session.email;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
