import { IsEmail, Length } from 'class-validator';

export class LoginAuthDto {
    @IsEmail()
    email: string;

    @Length(5, 12)
    password: string;
}
