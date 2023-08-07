import axios, { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { paths } from '@/routes/paths';
import { notify } from '@/utils/helpers/notify';

import { AUTHENTICATION } from '@/constants/endpoints';
import { IPlainObject } from '@/types/common';
import { IHttpError } from '@/types/http';

import { getPersistToken, persistToken } from './token';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + import.meta.env.VITE_API_VERSION,
  timeout: 60000,
  timeoutErrorMessage: 'request-timeout-by-axios',
});

axiosInstance.interceptors.request.use((config) => {
  const { accessToken } = getPersistToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

const refreshTokenFn = async () => {
  const { accessToken, refreshToken } = getPersistToken();

  try {
    const res = await axiosInstance.post(
      AUTHENTICATION.tokenRefresh,
      {
        refreshToken,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } = res.data;

    persistToken({ accessToken: newAccessToken, refreshToken: newRefreshToken });

    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  } catch (error) {
    // Run logout api and then move to login page
    window.location.href = paths.login;
  }
};

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },

  async (error: AxiosError): Promise<IHttpError | undefined> => {
    if (error.message === 'request-timeout-by-axios') {
      notify.error('Request timeout');
      return;
    }

    const originalRequest = error.config;

    if (!originalRequest?.url?.includes(paths.login) && error.response?.status === 401) {
      const result = await refreshTokenFn();

      if (result?.accessToken) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${result.accessToken}`;

        return axiosInstance({ ...originalRequest });
      }
    }

    return Promise.reject(error.response?.data || error);
  }
);

const getAxiosInstance = (): Axios => axiosInstance;

const getResponseData = <T>(response: AxiosResponse): T => {
  return (response?.data || response) as T;
};

const getRequest = (URL: string, payload?: IPlainObject) => {
  const params = payload ? JSON.stringify({ dto: payload }) : '';
  return axiosInstance.get(URL, {
    params: {
      [params]: '',
      _: new Date().getTime(),
    },
  });
};

export function postRequest(URL: string, payload: IPlainObject, config?: AxiosRequestConfig) {
  return axiosInstance.post(URL, payload, config);
}

export function putRequest(URL: string, payload: IPlainObject, config?: AxiosRequestConfig) {
  return axiosInstance.put(URL, payload, config);
}

export function deleteRequest(URL: string, payload: IPlainObject) {
  return axiosInstance.delete(URL, { data: payload });
}

export { getAxiosInstance, getRequest, getResponseData };
