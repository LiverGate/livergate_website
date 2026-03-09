FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20-slim

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/vite.config.ts ./

# Install tsx to run server.ts in production if needed, or just use node if compiled
# Actually, I'll use tsx for simplicity as the environment supports it
RUN npm install -g tsx

# Cloud Run will set the PORT environment variable
ENV NODE_ENV=production

CMD ["tsx", "server.ts"]
