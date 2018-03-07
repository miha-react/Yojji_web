FROM node:8
COPY . /public
EXPOSE 80
WORKDIR /public
RUN npm i
RUN npm run build
CMD npm run serve
