/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class CreateRecipeDto {
  @ApiProperty({
    example: 'Gnocci',
  })
  name: string;

  @ApiProperty({
    example: [
      {
        name: 'chicken breast',
        amount: '4',
      },
      {
        name: 'lemon juice',
        amount: '1/4 cup',
      },
      {
        name: 'olive oil',
        amount: '3 tablespoons',
      },
      {
        name: 'garlic',
        amount: '3 cloves',
      },
      {
        name: 'salt',
        amount: '1 teaspoon',
      },
      {
        name: 'pepper',
        amount: '1 teaspoon',
      },
    ],
  })
  ingredients: string[];

  @ApiProperty({
    example: [
      'Preheat the oven to 375°F (190°C).',
      'In a small bowl, whisk together the lemon juice, olive oil, minced garlic, salt, and pepper.',
      'Place the chicken in a baking dish and pour the marinade over it.',
      'Bake for 25-30 minutes, or until the chicken is cooked through and the internal temperature reaches 165°F (74°C).',
      'Serve hot.',
    ],
  })
  instructions: string[];

  @ApiProperty({
    example: 2,
  })
  serving_size: number;

  @ApiProperty({
    example: '10 minutes',
  })
  prep_time: string;

  @ApiProperty({
    example: '20 minutes',
  })
  cook_time: string;

  @ApiProperty({
    example: 'easy',
  })
  difficulty: string;

  @ApiProperty({
    example: 15,
  })
  recipe_Id: number;
}
