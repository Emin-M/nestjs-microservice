import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            preview: false,
            transport: Transport.KAFKA,
            options: {
                client: {
                    brokers: ['localhost:9092'],
                    sasl: {
                        mechanism: "plain",
                        username: "admin",
                        password: "admin-secret",
                    }
                },
                consumer: {
                    groupId: 'billing-consumer',
                },
            }
        },
    );
    app.listen();
}

bootstrap();
