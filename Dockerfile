FROM node:18.12.1-alpine
COPY xongroh-backend /testserver/
WORKDIR /testserver
RUN npm install
CMD ["npm", "start"]