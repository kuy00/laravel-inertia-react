import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import babel from "vite-plugin-babel";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.js"],
            refresh: true,
        }),
        react(),
        eslint(),
        babel(),
    ],
});
