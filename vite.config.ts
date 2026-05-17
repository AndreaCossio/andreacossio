import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const customHosts = process.env.ALLOWED_HOSTS ? process.env.ALLOWED_HOSTS.split(",").map((host) => host.trim()) : [];

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [nitro({ preset: "bun" }), tailwindcss(), tanstackStart(), viteReact()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    allowedHosts: [...customHosts, "localhost"],
    hmr: {
      clientPort: 443,
    },
  },
});

export default config;
