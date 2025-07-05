import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UsersService {
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

  findAll() {
    return this.users;
  }

  getUserById(id: string) {
    const position = this.findOne(id);
    const user = this.users[position];
    if (user.id === '1') {
      throw new ForbiddenException('You are not allowed to access this user');
    }
    return user;
  }

  create(body: CreateUserDto) {
    const newUser = {
      ...body,
      id: `${new Date().getTime()}`,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, changes: UpdateUserDto) {
    const position = this.findOne(id);
    const currentData = this.users[position];
    const updatedUser = {
      ...currentData,
      ...changes,
    };
    this.users[position] = updatedUser;
    return updatedUser;
  }

  delete(id: string) {
    const position = this.findOne(id);
    this.users.splice(position, 1);
    return { message: 'User deleted' };
  }

  private findOne(id: string) {
    const position = this.users.findIndex((user) => user.id === id);
    if (position === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return position;
  }
}
