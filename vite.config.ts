import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { viteStaticCopy } from "vite-plugin-static-copy";

import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        theme_color: "#3587f6",
        background_color: "#35f63d",
        display: "standalone",
        scope: "/",
        start_url: "/",
        name: "FriendScan",
        short_name: "Friend",
        description: "Build Friendscan with PWA",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      registerType: "autoUpdate",
      outDir: path.resolve(__dirname, "dist"),

      // HERE! For custom service worker
      srcDir: path.resolve(__dirname, "src/"),
      filename: "sw.js",
      strategies: "injectManifest",

      workbox: {
        globDirectory: path.resolve(__dirname, "dist"),
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      includeAssets: ["**/*.{png,svg}"],
      // injectRegister: null,
    }),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "registerSW.js"), // 1️⃣
          dest: "", // 2️⃣
        },
      ],
    }),
  ],
});
