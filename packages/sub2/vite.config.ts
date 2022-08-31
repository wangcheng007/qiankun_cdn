/*
 * @Author: lanjing
 * @Date: 2022-08-29 16:10:22
 * @LastEditors: lanjing
 * @Description: file content
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import qiankun from 'vite-plugin-qiankun';
import packageConfig from './package.json';

const useDevMode = true;
export default ({ mode }) => {
    return defineConfig({
        base: mode === 'development' ? '/' : '/sub2/',
        plugins: [
            // react(),
            qiankun(packageConfig.name, {
                useDevMode,
            }),
        ],
        
        css: {
            modules: {
                scopeBehaviour: 'local',
                localsConvention: 'camelCase',
            },
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            },
        },

        server: {
            host: '0.0.0.0',
            proxy: {

            },
            port: 3002,
            cors: true,
        },
    })
}
