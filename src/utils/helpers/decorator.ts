import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

import { IPlainObject } from '@/types/common';

import { isJsonFormat } from './format';

export function IsOnlyNumber(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string): void {
    registerDecorator({
      name: 'IsOnlyNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string): boolean {
          if (value === '') return true;
          return new RegExp(/^[0-9]+$/).test(value);
        },
        defaultMessage: () => {
          return '$property must be only contain number';
        },
      },
    });
  };
}

export function IsRelatedNotHas(property: string, values: string[], validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string): void => {
    registerDecorator({
      name: 'IsRelatedNotHas',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: {
        validate(value: string, args: ValidationArguments): boolean {
          const [relatedPropertyName] = args.constraints;

          const relatedValue = (args.object as IPlainObject)[relatedPropertyName];

          if (!value?.trim()?.length) return !values?.includes(relatedValue);

          return !!value?.trim()?.length;
        },
        defaultMessage: () => {
          return 'Please fill this field';
        },
      },
    });
  };
}

export function IsNotBlank(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isNotBlank',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string): boolean {
          return typeof value === 'string' && value.trim().length > 0;
        },
      },
    });
  };
}

export function IsJson(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string): void {
    registerDecorator({
      name: 'IsJson',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string): boolean {
          if (typeof value === 'string') {
            return isJsonFormat(value.replace(/[\n\t ]/g, ''));
          }
          return true;
        },
        defaultMessage: () => {
          return '$property is not valid JSON';
        },
      },
    });
  };
}
