import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('developers')
  getDevelopers(): string[] {
    return this.appService.getDevelopers();
  }

  @Get('feed')
  getFeed(@Query() query: { signature: string }) {
    return this.appService.getFeed(query.signature);
  }
}
