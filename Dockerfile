# stage 1
FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# stage 2
FROM nginx:alpine
COPY --from=builder /app/dist/my-resume /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
