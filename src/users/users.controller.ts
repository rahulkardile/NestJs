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

  constructor(private readonly usersService: UsersService){}

  @Get() //GET /users
  findAll(@Query('role') role?: 'INTERN' | 'MANAGER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get('interns') //GET /users/interns
  findAllInterns() {
    return this.usersService.findAllInterns();
  }

  @Get(':id') //GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Post() // Post /user
  create(@Body() user: UserInter) {
    return this.usersService.create(user);
  }

  @Patch(':id') // Patch /user
  update(@Param('id') id: string, @Body() user: UserInter) {
    return this.usersService.update(Number(id), user)
  }

  @Delete(':id') //Delete /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(Number(id))
  }

}
