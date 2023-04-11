FROM node:15
WORKDIR /app
COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY . ./

RUN npm install -g @nestjs/cli

ENV PORT 3000
EXPOSE $PORT

COPY start.sh /app
RUN chmod +x /app/start.sh

CMD ["/bin/bash", "/app/start.sh"]