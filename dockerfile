# ====== Etapa 1: Build ======
FROM node:20-alpine AS builder
WORKDIR /app

# Instala dependências
COPY package.json package-lock.json ./
RUN npm install

# Declara os build-args
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY

# Define-os como variáveis de ambiente no build
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY

# Copia todo o código para dentro do container de build
COPY . .

# Roda o build do Next.js (usar essas ENV para gerar o bundle correto)
RUN npm run build

# ====== Etapa 2: Runtime ======
FROM node:20-alpine
WORKDIR /app

# Copia os arquivos do builder para o container final
COPY --from=builder /app ./

# (Opcional) Reexporta as variáveis caso algum código precise em runtime
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY

EXPOSE 3000
CMD ["npm", "start"]
