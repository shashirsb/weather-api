FROM node:10-alpine
RUN mkdir -p /home/orademo/dockerimage/weather-api/app
RUN mkdir -p /home/orademo/dockerimage/weather-api/app/node_modules
WORKDIR /home/orademo/dockerimage/weather-api/app
COPY . .
RUN npm install
RUN npm install -g typescript
RUN tsc
EXPOSE 8000
CMD [ "npm", "start" ]