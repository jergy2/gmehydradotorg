import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://www.gmehydra.org',
    supportFile: false,
  },
});
