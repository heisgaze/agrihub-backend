import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { clientUrl } from './utils/constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: clientUrl, credentials: true },
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  app.use(helmet());

  app.use(cookieParser());

  await app.listen(process.env.PORT || 3001);
}
bootstrap();