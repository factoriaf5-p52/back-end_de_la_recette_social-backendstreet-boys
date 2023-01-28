import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredientDto {
  @ApiProperty({
    example: 'Rice',
  })
  name: string;

  @ApiProperty({
    example: 'Grams',
  })
  measure_unit: string;
}
