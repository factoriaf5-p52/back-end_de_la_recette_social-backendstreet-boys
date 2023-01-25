/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) { }

  create(createuserDto: CreateUserDto) {
    return this.userModel.create(createuserDto);
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findUser(user_Id: string): Promise<User> {
    return this.userModel.findOne({ user_Id });
  }

  async update(user_Id: string, newuser: UpdateUserDto) {
    try {
      const user = await this.findUser(user_Id)
      console.log(user)
      if (user != null) {
        const updateuser = Object.assign(user, newuser);
        return this.userModel.findOneAndUpdate({ user_Id }, newuser, { new: true });
      }
      else {
        throw new Error()
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  async remove(user_Id: number) {
    return this.userModel.remove({ user_Id });
  }
}
