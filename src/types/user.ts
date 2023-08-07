import { ERole } from '@/constants/enum';

export interface IUserInfo {
  resourceId: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  name: string;
  role: ERole;
  phoneNumber: string;
  partName: string;
  inUse: boolean;
  isLocked: boolean;
  lastPasswordChangedDate: string;
}
