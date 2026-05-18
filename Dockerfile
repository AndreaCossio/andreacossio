# --- Stage 1: Base ---
FROM oven/bun:1 AS base
WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

# --- Stage 2: Dependencies ---
FROM base AS dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# --- Stage 3: Development Target ---
FROM dependencies AS development
COPY . .
CMD ["bun", "run", "dev"]

# --- Stage 4: Builder (For Production) ---
FROM dependencies AS builder
COPY . .
RUN bun run build

# --- Stage 5: Production Target ---
FROM base AS production
COPY --from=builder /app/.output ./.output
ENV NODE_ENV=production
CMD ["bun", "run", ".output/server/index.mjs"]
