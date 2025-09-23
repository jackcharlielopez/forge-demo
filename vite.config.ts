import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
});

// Vitest config (for test runner, not used by Vite directly)
export const test = {
  environment: 'happy-dom',
  globals: true,
  setupFiles: [
    '@testing-library/jest-dom'
  ],
  coverage: {
    provider: 'c8',
    reporter: ['text', 'html']
  }
};
