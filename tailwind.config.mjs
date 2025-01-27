import typography from '@tailwindcss/typography' //Agrega soporte para estilos de texto de Tailwind CSS

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [typography], //Agrega soporte para estilos de texto de Tailwind CSS
}
