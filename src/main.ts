import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Full Stack Challenge - Gazin')
    .setDescription('Developer registration and level')
    .setVersion('1.0')
    .addTag('Developer')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/documentation', app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
  console.log(
    'Server listening',

    process.env.PORT
  );
}
bootstrap();
