import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.ico', 'logo.png'],
			manifest: {
				name: 'Todo App',
				short_name: 'Todo App',
				theme_color: '#ffffff',
				icons: [
					{
						src: 'logo.png',
						sizes: '64x64',
						type: 'image/png'
					}
				]
			}
		})
	]
})
