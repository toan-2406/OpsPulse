FROM node:22-alpine
WORKDIR /app
COPY package.json pnpm-workspace.yaml turbo.json tsconfig.base.json ./
COPY packages ./packages
COPY apps/web ./apps/web
RUN npm i -g pnpm@10.28.2
RUN pnpm install
EXPOSE 5173
CMD ["pnpm","--filter","web","dev","--","--host","0.0.0.0","--port","5173"]
