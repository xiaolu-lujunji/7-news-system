import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';
import { AppModule } from './app.module';

ConfigModule.forRoot({
  envFilePath: [
    resolve(__dirname, '../../../.env.development'),
    resolve(__dirname, '../../../.env.production'),
  ],
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
  });
  await app.listen(3000);
}
bootstrap();
