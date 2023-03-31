import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequestDto } from './dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './events';
import { logger } from './logger/winston';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
    logger.info('success');
  }

  createOrder({ userId, price }: CreateOrderRequestDto) {
    logger.info('success');
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );
  }
}
