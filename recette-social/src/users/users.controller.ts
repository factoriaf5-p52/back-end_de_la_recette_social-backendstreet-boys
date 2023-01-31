/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':user_Id')
  findUser(@Param('user_Id') user_Id: string) {
    return this.usersService.findUser(user_Id);
  }

  @Patch(':user_Id')
  update(
    @Body() newuser: UpdateUserDto,
    @Param('user_Id') user_Id: string,
  ) {
    return this.usersService.update(user_Id, newuser);
  }

  @Delete(':user_Id')
  remove(@Param('user_Id') user_Id: string) {
    return this.usersService.remove(+user_Id);
  }
}

