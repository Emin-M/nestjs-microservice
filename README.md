## RUN development
     docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
## RUN production
     docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d


#### Needed to set the below additional kafka client properties in the producer/consumer:

security.protocol=SASL_PLAINTEXT
sasl.mechanism=PLAIN
sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="admin" password="
admin-secret";

###### when run without nestjs