/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserInter } from 'src/types/user';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'rahul sonawane',
      email: 'rahul321@hma.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'suraj mate',
      email: 'suraj321@hma.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'shubh sawai',
      email: 'shubh321@hma.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'vaibhav wakle',
      email: 'vaibhai321@hma.com',
      role: 'MANAGER',
    },
    {
      id: 5,
      name: 'shantanu nirphal',
      email: 'shantanu321@hma.com',
      role: 'ADMIN',
    },
    {
      id: 6,
      name: 'ravi pote',
      email: 'ravi321@hma.com',
      role: 'MANAGER',
    },
    {
      id: 7,
      name: 'pratik deshmukh',
      email: 'pratok321@hma.com',
      role: 'INTERN',
    },
    {
      id: 8,
      name: 'rugved bhavsar',
      email: 'rugved321@hma.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'MANAGER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findAllInterns() {
    return this.users.filter((user) => user.role === 'INTERN');
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: UserInter ) {
    const highestId = [...this.users].sort((a, b) => (b.id = a.id));
    const newUser = {
      id: highestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return user;
  }

  update(
    id: number,
    updateUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'MANAGER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((i) => {
      if (i.id === id) {
        return { ...i, ...updateUser };
      }
      return i;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removeUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removeUser
  }
}
