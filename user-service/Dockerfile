FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install && npm install -g nodemon

COPY . .

EXPOSE 3001

# Install dev deps
RUN npm install -g ts-node-dev

CMD ["npm", "run", "build"]
