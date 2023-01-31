/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger'

export class CreateGroupDto {
    @ApiProperty({
        example: 'Chanchitos felices group'
    })
    name: string;

    @ApiProperty({
        example: '12-12-2020'
    })
    creation_date: Date;

    @ApiProperty({
        example: 123
    })
    number_of_members: number;

    @ApiProperty({
        example: 'chanchito gordito'
    })
    admin: string;

    @ApiProperty({
        example: 'recetas varias'
    })
    recipes: string[];

    @ApiProperty({
        example: 'usarios varios'
    })
   users: string[];

   @ApiProperty({
    example: 15,
  })
  recipe_Id: number;

   
}
