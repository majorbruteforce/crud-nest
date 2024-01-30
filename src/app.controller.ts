import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/multiply')
  multiplyParams(@Query() query: Record<string, number>): number{
     const result= this.appService.timesSeven(query.value)
     console.log(query)
     return result;
  }
}


