/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
