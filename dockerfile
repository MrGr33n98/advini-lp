# Etapa de build
FROM node:20-alpine AS builder
WORKDIR /app

# Copia apenas os arquivos de dependências para instalar mais rápido em builds futuros
COPY package.json package-lock.json* ./
RUN npm install

# Copia o restante do projeto e o .env.local antes do build
COPY . .
COPY .env.local .env.local
RUN npm run build

# Etapa de produção
FROM node:20-alpine
WORKDIR /app

# Copia tudo da etapa de build
COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]