/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
    @ApiProperty({
        example: 'Chander'
    })
    name: string;

    @ApiProperty({
        example: 'Romero'
    })
    lastname: string;

    @ApiProperty({
        example: 'Chancho'
    })
    username: string;

    @ApiProperty({
        example: 'chanchito@felis.com'
    })
    email: string;

    @ApiProperty({
        example: 'chanchitotriste'
    })
    password: string;

    @ApiProperty({
        example: [
            {
                name: 'chanchos group',
            },
            {
                name: 'factoria-f5'
            }
        ]
    })
    groups: string[];

    @ApiProperty({
        example: 'Gold'
    })
    badge: string;

    @ApiProperty({
        example: true
    })
    admin: boolean;
}
