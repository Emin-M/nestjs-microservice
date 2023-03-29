import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.KAFKA,
            options: {
                client: {
                    brokers: ['localhost:9092'],
                    sasl: {
                        mechanism: "plain",
                        username: "admin",
                        password: "admin-secret"
                    }
                },
                consumer: {
                    groupId: 'auth-consumer',
                },
            },
        },
    );
    app.listen();
}

bootstrap();
