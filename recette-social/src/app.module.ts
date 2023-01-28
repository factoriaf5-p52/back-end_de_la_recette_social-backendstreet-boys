import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:factoriaf5@cluster0.fmw7sqs.mongodb.net/recipesdb',
    ),
    RecipesModule,
    AuthModule,
    UsersModule,
    IngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
