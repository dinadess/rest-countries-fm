import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// module.exports = {
//   publicPath:
//     process.env.NODE_ENV === "production" ? "/rest-countries-fm/" : "/",
// };

// https://vitejs.dev/config/
export default defineConfig({
  base: "/rest-countries-fm/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
