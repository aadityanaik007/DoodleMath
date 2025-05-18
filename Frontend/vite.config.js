import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // ✅ This is the key fix
    port: 3000,
    allowedHosts: [
      "localhost",
      "8ad1-2401-4900-1c96-fe60-fc8c-4840-50ef-ca6e.ngrok-free.app",
    ],
  },
});
