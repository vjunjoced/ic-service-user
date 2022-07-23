import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get rmqUrl(): string {
    return this.configService.get('appConfig.rmqUrl');
  }

  get serviceUserQueue(): string {
    return this.configService.get('appConfig.serviceUserQueue');
  }
}
