/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Delete, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { AuthRequest } from '../models/AuthRequest';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  /* @Patch()
  update(@Request() req: AuthRequest) { 
    return this.userService.update(req.body);
  } */

  @Delete()
  remove(@Request() req: AuthRequest) {
    return this.userService.remove(req.headers.authorization);
  }
}
