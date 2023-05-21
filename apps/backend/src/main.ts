import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';
import { AppModule } from './app.module';

ConfigModule.forRoot({
  envFilePath:
    process.env.NODE_ENV === 'development'
      ? resolve(__dirname, '../../../.env.development')
      : resolve(__dirname, '../../../.env.production'),
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.WEB_BASE_URL,
  });
  await app.listen(3000);
}
bootstrap();
