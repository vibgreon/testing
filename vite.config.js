import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Vivek Venkatesh | Product Designer",
        short_name: "Portfolio :D",
        description: "Exploring ways to make User Experience understood and fun for the masses.",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/icon/pwa-icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon/pwa-icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,svg}"],
      },
    }),
  ],
})
