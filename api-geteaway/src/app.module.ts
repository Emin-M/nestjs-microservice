import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ClientsModule, Transport} from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'BILLING_SERVICE',
                transport: Transport.KAFKA,
                options: {
                    client: {
                        clientId: 'billing',
                        brokers: ['kafka:9092'],
                        sasl: {
                            mechanism: "plain",
                            username: "admin",
                            password: "admin-secret"
                        }
                    },
                    consumer: {
                        groupId: 'billing-consumer',
                    },
                },
            },
        ]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
