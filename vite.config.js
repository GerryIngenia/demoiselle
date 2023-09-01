import autoprefixer from 'autoprefixer'
import {resolve} from "path";
import sortMediaQueries from "postcss-sort-media-queries"
import { defineConfig } from "vite"

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				categorias: resolve(__dirname, 'categorias.html'),
			},
			output: {
				assetFileNames: "css/styles.min[extname]",
				entryFileNames: "js/[name].min.js"
			}
		}
	},
	css: {
		postcss: {
			plugins: [
				autoprefixer({
					overrideBrowserslist: [
						"> 1%",
						"last 2 version",
					]
				}),
				sortMediaQueries({
					sort: "mobile-first"
				})
			],
		}
	}
})