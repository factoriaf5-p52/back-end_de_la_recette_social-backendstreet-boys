import { IsEmail, Max, Min } from 'class-validator';

export class LoginAuthDto {
    @IsEmail()
    email: string;

    @Max(12)
    @Min(6)
    password: string;
}
