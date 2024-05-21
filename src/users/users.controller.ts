/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserInter } from 'src/types/user';
import { UsersService } from './users.service';

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

  constructor(private readonly usersService: UsersService) {}

  @Get() //GET /users
  findAll(@Query('role') role?: 'INTERN' | 'MANAGER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get('interns') //GET /users/interns
  findAllInterns() {
    return this.usersService.findAllInterns();
  }

  @Get(':id') //GET /users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post() // Post /user
  create(@Body() user: UserInter) {
    return this.usersService.create(user);
  }

  @Patch(':id') // Patch /user
  update(@Param('id', ParseIntPipe) id: number, @Body() user: UserInter) {
    return this.usersService.update(id, user);
  }

  @Delete(':id') //Delete /users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
