import { Module } from '@nestjs/common';
import { AppConfigModule } from './config';
import { ExampleModule } from './modules/example/example.module';
import { AppConfigService } from './config.service';

@Module({
  imports: [AppConfigModule, ExampleModule],
  controllers: [],
  providers: [AppConfigService],
})
export class AppModule {}
