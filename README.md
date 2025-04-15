# NestJS Microservices Architecture

This project implements a microservices architecture using NestJS, featuring multiple services and a comprehensive monitoring setup.

## Project Structure

The project consists of the following services:

- **API Gateway**: Main entry point for all client requests
- **Auth Service**: Handles authentication and authorization
- **Billing Service**: Manages billing and payment processing

## Prerequisites

- Docker and Docker Compose
- Node.js (v16 or higher)
- npm or yarn

## Getting Started

### Development Environment

1. Clone the repository:
```bash
git clone <repository-url>
cd nestjs-microservice
```

2. Start the development environment:
```bash
docker-compose -f docker-compose.dev.yml up -d
```

### Production Environment

To start the production environment:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## Monitoring Setup

The project includes a monitoring stack with Prometheus and Grafana:

- **Prometheus**: Available at `http://localhost:9090`
- **Grafana**: Available at `http://localhost:3001`
  - Default credentials:
    - Username: `admin`
    - Password: `admin`

To start the monitoring stack:
```bash
docker-compose -f docker-compose.monitoring.yml up -d
```

## Service Ports

- API Gateway: `3000`
- Auth Service: `3001`
- Billing Service: `3002`
- Prometheus: `9090`
- Grafana: `3001`

## Configuration

Configuration files are located in the `configs/` directory:
- Prometheus configuration: `configs/prometheus.yml`
- Grafana provisioning: `configs/grafana/provisioning/`

## Development

### Running Services Individually

Each service can be run independently:

```bash
# Auth Service
cd auth
npm install
npm run start:dev

# Billing Service
cd billing
npm install
npm run start:dev

# API Gateway
cd api-gateway
npm install
npm run start:dev
```

#### Needed to set the below additional kafka client properties in the producer/consumer:

security.protocol=SASL_PLAINTEXT
sasl.mechanism=PLAIN
sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="admin" password="
admin-secret";

###### when run without nestjs