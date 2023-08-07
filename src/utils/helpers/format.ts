import { IPlainObject } from '@/types/common';

export const getPrettyJsonString = (jsonString = '') => {
  if (!jsonString.trim()) {
    return '';
  } else {
    return JSON.stringify(JSON.parse(jsonString), null, 2);
  }
};

export const isJsonFormat = (jsonString = ''): boolean => {
  if (!jsonString.trim()) {
    return true;
  } else {
    let isValid = false;
    try {
      const value = JSON.stringify(JSON.parse(jsonString), null, 2);
      if (value) {
        isValid = true;
      }
    } catch (error) {
      isValid = false;
    }
    return isValid;
  }
};

export const getURLObjectFromLink = (url: string): URL => {
  return new URL(url);
};

export const getObjectValuesByKey = (arr: IPlainObject[], key: string): string[] => {
  return arr.map((object) => `${object[key]}`);
};
