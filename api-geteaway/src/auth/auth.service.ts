import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { logger } from '../logger/winston';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
  ) {}

  async validateToken(token: string) {
    logger.info('Token validation request');
    return this.authClient.send({ cmd: 'validate_token' }, token);
  }
} 