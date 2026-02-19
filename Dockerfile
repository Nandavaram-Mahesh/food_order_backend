FROM node:20.20.0-alpine3.23 AS base

# Stage 1 : Build Stuff
FROM base AS builder

WORKDIR /app

COPY package*.json .
COPY tsconfig.json .

RUN npm install 

COPY src/ src/
COPY .env .
COPY .env.dev .

RUN npm run build

# Stage 2 : Runner
FROM base AS runner

WORKDIR /app

COPY --from=builder /app/dist dist/
COPY --from=builder /app/package*.json .
COPY --from=builder /app/.env.dev .

RUN npm install --omit=dev

EXPOSE 5000

CMD ["node","dist/server.js"]