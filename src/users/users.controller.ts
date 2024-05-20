/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserInter } from 'src/types/user';

@Controller('users')
export class UsersController {
  /*
        GET /users
        GET /users/:id
        POST /users
        PATCH /users/:id
        DELETE /users/:id
    */

  //   @Get() //GET /users
  //   findAll() {
  //     return [];
  //   }

  @Get() //GET /users
  findAll(@Query('role') role?: 'INTERN' | 'MANAGER' | 'ADMIN') {
    if (role) {
      if (role == 'ADMIN') {
        return 'Welcome Admin';
      }
      if (role == 'INTERN') {
        return 'Welcome Intern';
      }
      if (role == 'MANAGER') {
        return 'Welcome Manager';
      }
    } else {
      return "User's are Found!";
    }
  }

  @Get('interns') //GET /users/interns
  findAllInterns() {
    return [];
  }

  @Get(':id') //GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // Post /user
  create(@Body() user: UserInter) {
    return user;
  }

  @Patch(':id') // Patch /user
  update(@Param('id') id: string, @Body() user: UserInter) {
    return { id, ...user };
  }

  @Delete(':id') //Delete /users/:id
  delete(@Param('id') id: string) {
    return { id, message: 'deleted' };
  }
}
