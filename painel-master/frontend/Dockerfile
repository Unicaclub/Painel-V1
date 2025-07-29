# Etapa de build
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa de produção
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor a porta padrão do Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
