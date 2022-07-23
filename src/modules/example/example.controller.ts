import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ExampleController {
  @MessagePattern('test')
  async test2(): Promise<void> {
    console.log('test2');
  }
}
