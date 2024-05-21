/* eslint-disable prettier/prettier */

import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'MANAGER', 'ADMIN'], {
    message: 'Please provide valid user role!',
  })
  role: 'INTERN' | 'MANAGER' | 'ADMIN';
}
