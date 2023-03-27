import { Inject, Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './events';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    this.authClient
      .send('get_user', new GetUserRequest(orderCreatedEvent.userId))
      .subscribe((user) => {
        console.log(
          `StripeID: ${user.stripeUserId} price ${orderCreatedEvent.price}`,
        );
      });
  }
}
