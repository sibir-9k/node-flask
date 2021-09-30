FROM node

WORKDIR /flask

COPY . .

RUN npm install

EXPOSE 80

CMD ["npm", "run", "dev"]