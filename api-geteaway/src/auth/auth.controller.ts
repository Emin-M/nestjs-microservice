import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SignUpDto, SignInDto } from '@shared';
import { logger } from '../logger/winston';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
  ) {}

  @Post('signup')
  async signup(@Body() signupDto: SignUpDto) {
    logger.info(`Signup attempt for email: ${signupDto.email}`);
    return this.authClient.send({ cmd: 'signup' }, signupDto);
  }

  @Post('signin')
  async signin(@Body() signinDto: SignInDto) {
    logger.info(`Signin attempt for email: ${signinDto.email}`);
    return this.authClient.send({ cmd: 'signin' }, signinDto);
  }
} 