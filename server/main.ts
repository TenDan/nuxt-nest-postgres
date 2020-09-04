import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, NotAcceptableException } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors) => new NotAcceptableException(errors),
  }));
  await app.listen(3000, () => console.log('Listening at http://localhost:3000'));
}
bootstrap();
