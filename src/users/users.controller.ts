import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';

interface User {
  id: string;
  name: string;
  email: string;
}

@Controller('users')
export class UsersController {
  private users: User[] = [
    {
      id: '1',
      name: 'Mariana Lopez',
      email: 'mariana.lopez@example.com',
    },
    {
      id: '2',
      name: 'Juan Perez',
      email: 'juan.perez@example.com',
    },
    {
      id: '3',
      name: 'Nicolas Lopez',
      email: 'nicolas.lopez@example.com',
    },
  ];

  @Get()
  getUsers() {
    return this.users;
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      return {
        error: 'User not found',
      };
    }
    return user;
  }

  @Post()
  createUser(@Body() body: User) {
    const newUser = {
      ...body,
      id: `${new Date().getTime()}`,
    };
    this.users.push(newUser);
    return newUser;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    const position = this.users.findIndex((user) => user.id === id);
    if (position === -1) {
      return {
        error: 'User not found',
      };
    }
    this.users.splice(position, 1);
    return {
      message: 'User deleted',
    };
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() changes: User) {
    const position = this.users.findIndex((user) => user.id === id);
    if (position === -1) {
      return {
        error: 'User not found',
      };
    }
    const currentData = this.users[position];
    const updatedUser = {
      ...currentData,
      ...changes,
    };
    this.users[position] = updatedUser;
    return updatedUser;
  }
}
