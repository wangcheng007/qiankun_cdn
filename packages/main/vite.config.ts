import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
    return defineConfig({
        plugins: [
            react(),
        ],
      
        server: {
            host: '0.0.0.0',
            proxy: {
            },
            port: 3000,
            cors: true,
        },
    })
}
