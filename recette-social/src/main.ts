/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // eslint-disable-next-line prettier/prettier
  // eslint-disable-next-line prettier/prettier
  app.setGlobalPrefix('recette/v1');

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Recette-Social')
    .setDescription('Api rest para recetas y red social')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
