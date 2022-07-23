import { ConfigModule, registerAs } from '@nestjs/config';

export interface AppConfig {
  rmqUrl: string;
  userServiceQueue: string;
}

const AppConfig = registerAs<AppConfig>('appConfig', () => {
  return {
    rmqUrl: process.env.RMQ_URL,
    userServiceQueue: process.env.USER_SERVICE_QUEUE,
  };
});

export const AppConfigModule = ConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
  load: [AppConfig],
});
