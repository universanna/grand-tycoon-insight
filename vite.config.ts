import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  return {
    plugins: [react()],
    base: isProd ? '/' : '/',
    server: {
      port: 8080
    }
  }
});
