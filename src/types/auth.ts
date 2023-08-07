import { IUserInfo } from './user';

export type PeristTokens = {
  accessToken: string;
  refreshToken: string;
};

export interface ILogin {
  tokenType: string;
  accessToken: string;
  accessTokenExpiresIn: number;
  refreshToken: string;
  refreshTokenExpiresIn: number;
  userInfo: IUserInfo;
}
