import { ConfigModule, registerAs } from '@nestjs/config';

export interface AppConfig {
  rmqUrl: string;
  serviceUserQueue: string;
}

const AppConfig = registerAs<AppConfig>('appConfig', () => {
  return {
    rmqUrl: process.env.RMQ_URL,
    serviceUserQueue: process.env.SERVICE_USER_QUEUE,
  };
});

export const AppConfigModule = ConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
  load: [AppConfig],
});
