import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) { }

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject;
    const plainToHash = await hash(password, 10);
    userObject = { ...userObject, password: plainToHash };
    return this.userModel.create(userObject)
  }

  async login(userObjectLogin: LoginAuthDto) {
    //setting email and password into and object
    const { email, password } = userObjectLogin
    //find the user by email, if no user match the email return 404
    const findUser = await this.userModel.findOne({ email })
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404)

    //compare the given crypted password with the one in db
    const checkPassword = await compare(password, findUser.password)
    //if dosent match retunr 403
    if (!checkPassword) throw new HttpException('PASSWORD_INVALID', 403)

    //
    const data = findUser;
    console.log(data)
    return data;
  }

}
