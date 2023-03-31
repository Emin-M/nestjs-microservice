import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './dto';
import { logger } from './logger/winston';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: '43234',
    },
    {
      userId: '345',
      stripeUserId: '27279',
    },
  ];

  getHello(): string {
    return 'Hello World!';
    logger.info('success_auth');
  }

  getUser(getUserRequest: GetUserRequest) {
    logger.info('success_auth');
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
