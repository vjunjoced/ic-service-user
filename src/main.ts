import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { AppConfigService } from './config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(AppConfigService);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [configService.rmqUrl],
      queue: configService.serviceUserQueue,
    },
  });

  await app.startAllMicroservices();

  Logger.log(`Microservice is listening...`, 'Bootstrap');
}

bootstrap();
