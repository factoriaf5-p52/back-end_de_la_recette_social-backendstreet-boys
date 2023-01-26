import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService
  ) { }

  async register(userObject: RegisterAuthDto) {
    //destructuring password and setting onto userObject
    const { password } = userObject;
    //encrypt password
    const plainToHash = await hash(password, 10);
    //replace password to encrypted password
    userObject = { ...userObject, password: plainToHash };
    //create user on db
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

    //creating a token and setting the user name and id into payload
    const payload = { id: findUser._id, name: findUser.name }
    const token = await this.jwtService.sign(payload)

    //gather all the data and returnign it
    const data = {
      user: findUser,
      token
    }
    return data;
  }
}
