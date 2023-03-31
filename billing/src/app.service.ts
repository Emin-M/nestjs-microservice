import { Inject, Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './events';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './dto';
import { logger } from './logger/winston';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}
  getHello(): string {
    logger.info('success_auth');
    return 'Hello World!';
  }

  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    this.authClient
      .send('get_user', new GetUserRequest(orderCreatedEvent.userId))
      .subscribe((user) => {
        logger.info('success_billing');
        console.log(
          `StripeID: ${user.stripeUserId} price ${orderCreatedEvent.price}`,
        );
      });
  }
}
