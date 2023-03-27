import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderRequestDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createOrder(@Body() createOrderRequest: CreateOrderRequestDto) {
    return this.appService.createOrder(createOrderRequest);
  }
}
