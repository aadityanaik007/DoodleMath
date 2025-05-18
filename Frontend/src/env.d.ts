// src/env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // add more VITE_ variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
