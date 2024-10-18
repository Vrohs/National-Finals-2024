FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]


# Build frontend
WORKDIR /app/frontend
RUN npm run build

# Move the build to the backend directory
RUN mkdir -p /app/backend/build
RUN mv /app/frontend/build/* /app/backend/build/