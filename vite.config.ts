import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import {fileURLToPath} from "url";

// Получаем __dirname в ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const backendApi: string = "http://192.168.33.82";

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: backendApi,
				changeOrigin: true,
			},
		},
		cors: {
			// Настройки CORS
			origin: backendApi, // Разрешить запросы только с этого источника
			methods: ["GET", "POST"], // Разрешить методы GET и POST
			allowedHeaders: ["Content-Type", "Authorization", "Cookie"], // Разрешить заголовки Content-Type и Authorization
			credentials: true, // Разрешить отправку и получение cookies
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	},
});