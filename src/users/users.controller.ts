/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

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
findAll(@Query('role') role?: 'INTERN' | "MANAGER" | 'ADMIN') {
    if(role == "ADMIN"){
        return "Welcome Admin";
    }
    if(role == "INTERN"){
        return "Welcome Intern";
    }
    if(role == "MANAGER"){
        return "Welcome Manager";
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
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // Patch /user
  update(@Param('id') id: string, @Body() user: {}) {
    return {id, ...user};
  }

  @Delete(':id') //Delete /users/:id
  delete(@Param('id') id: string) {
    return { id, message: "deleted" };
  }
}
