# Estágio de build
FROM node:16-alpine AS builder

WORKDIR /app

# Instalar yarn globalmente
RUN apk add --no-cache yarn

# Copiar arquivos de dependências
COPY package.json ./
COPY prisma ./prisma/

# Instalar dependências
RUN yarn install --network-timeout 1000000

# Copiar o resto dos arquivos
COPY . .

# Gerar Prisma Client
RUN npx prisma generate

# Build da aplicação
RUN yarn build

# Estágio de produção
FROM node:16-alpine AS runner

WORKDIR /app

# Instalar yarn globalmente
RUN apk add --no-cache yarn

# Copiar arquivos necessários
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/package.json ./

# Instalar apenas as dependências de produção
RUN yarn install --production --network-timeout 1000000

# Expor a porta
ENV PORT 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"] 