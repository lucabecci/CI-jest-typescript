# First Stage
FROM node:12-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run clean
RUN npm run build
# Second Stage
FROM node:12-alpine AS prod
WORKDIR /app
COPY --from=builder ./app/dist ./dist
COPY package* ./
RUN npm install --production
EXPOSE 3000
CMD npm start