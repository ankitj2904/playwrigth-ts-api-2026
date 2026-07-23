import { defineConfig } from '@playwright/test';
import { config } from './src/config/config';

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: config.baseURL,
    extraHTTPHeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
});