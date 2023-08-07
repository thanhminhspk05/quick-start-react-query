import Cookie from 'js-cookie';

import { COOKIES } from '@/constants/authentication';
import { PeristTokens } from '@/types/auth';

export const persistToken = ({ accessToken, refreshToken }: PeristTokens): void => {
  Cookie.set(COOKIES.ACCESS_TOKEN, accessToken, { expires: COOKIES.EXPIRE_TIME });
  Cookie.set(COOKIES.REFRESH_TOKEN, refreshToken, { expires: COOKIES.EXPIRE_TIME });
};

export const getPersistToken = (): PeristTokens => {
  return {
    accessToken: Cookie.get(COOKIES.ACCESS_TOKEN) || '',
    refreshToken: Cookie.get(COOKIES.REFRESH_TOKEN) || '',
  };
};

export const clearPersistToken = (): void => {
  Cookie.remove(COOKIES.ACCESS_TOKEN);
  Cookie.remove(COOKIES.REFRESH_TOKEN);
};
