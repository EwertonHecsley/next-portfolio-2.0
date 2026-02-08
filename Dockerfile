# ---------- STAGE 1: BUILD ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Instala dependências primeiro (melhora cache)
COPY package*.json ./
RUN npm install

# Copia o restante do projeto
COPY . .

# Gera build do Next
RUN npm run build


# ---------- STAGE 2: PRODUCTION ----------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copia apenas o necessário
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./

EXPOSE 3000

CMD ["npm", "start"]
