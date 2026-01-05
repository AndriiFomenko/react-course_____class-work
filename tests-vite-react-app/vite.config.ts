import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import type { UserConfigExport as VitestConfigExport } from 'vitest/config'
import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: [...configDefaults.exclude],
    coverage: {
      provider: 'v8',
      exclude: [
        'node_modules/',
        'dist/',
        'src/main.tsx',
        '**/*.d.ts',
        'eslint.config.js',
        'vite.config.ts',
        '*.config.{js,ts}'
      ]
    }
  }
} as UserConfig & VitestConfigExport)
