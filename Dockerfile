FROM node:21.1.0 as builder

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL $VITE_API_BASE_URL

COPY ./portfolio2024 /opt/portfolio2024
WORKDIR /opt/portfolio2024
RUN npm ci
RUN npm run build

FROM node:21.1.0-alpine3.18

COPY ./api /opt/portfolio/api
WORKDIR /opt/portfolio/api
COPY --from=builder /opt/portfolio2024/dist /opt/portfolio/api/web/build
RUN npm ci --only=production

EXPOSE 3000
CMD ["npm", "start"]



