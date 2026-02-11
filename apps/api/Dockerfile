FROM node:22-alpine
WORKDIR /app
COPY package.json pnpm-workspace.yaml turbo.json tsconfig.base.json ./
COPY packages ./packages
COPY apps/api ./apps/api
RUN npm i -g pnpm@10.28.2
RUN pnpm install
EXPOSE 3001
CMD ["pnpm","--filter","api","dev"]
