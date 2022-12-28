import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://gmehydra.org',
    supportFile: false,
  },
});
