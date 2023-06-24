// vite.config.js
import { defineConfig } from "file:///C:/Users/HP-PC/Desktop/NewHederaTailwind-main/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/HP-PC/Desktop/NewHederaTailwind-main/node_modules/@vitejs/plugin-react/dist/index.mjs";
import copy from "file:///C:/Users/HP-PC/Desktop/NewHederaTailwind-main/node_modules/rollup-plugin-copy/dist/index.commonjs.js";
import babel from 'vite-plugin-babel';


var vite_config_default = defineConfig({
  plugins: [
    react(),
    babel(),
    copy({
      targets: [
        { src: "src/manifest.json", dest: "dist" },
        { src: "src/assets", dest: "dist" }
      ],
      hook: "writeBundle"
    })
  ],
  build: {
    rollupOptions: {
      input: ["index.html", "src/background.ts", "src/contentScript.ts" ],
      output: {
        chunkFileNames: "[name].[hash].js",
        assetFileNames: "[name].[hash].[ext]",
        entryFileNames: "[name].js",
        dir: "dist"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUC1QQ1xcXFxEZXNrdG9wXFxcXE5ld0hlZGVyYVRhaWx3aW5kLW1haW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEhQLVBDXFxcXERlc2t0b3BcXFxcTmV3SGVkZXJhVGFpbHdpbmQtbWFpblxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvSFAtUEMvRGVza3RvcC9OZXdIZWRlcmFUYWlsd2luZC1tYWluL3ZpdGUuY29uZmlnLmpzXCI7LyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgY29weSBmcm9tIFwicm9sbHVwLXBsdWdpbi1jb3B5XCI7XG5cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGNvcHkoe1xuICAgICAgdGFyZ2V0czogW1xuICAgICAgICB7IHNyYzogXCJzcmMvbWFuaWZlc3QuanNvblwiLCBkZXN0OiBcImRpc3RcIiB9LFxuICAgICAgICB7IHNyYzogXCJzcmMvYXNzZXRzXCIsIGRlc3Q6IFwiZGlzdFwiIH0sXG4gICAgICBdLFxuICAgICAgaG9vazogXCJ3cml0ZUJ1bmRsZVwiLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiBbXCJpbmRleC5odG1sXCIsIFwic3JjL2JhY2tncm91bmQudHNcIiwgXCJzcmMvY29udGVudFNjcmlwdC50c1wiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJbbmFtZV0uW2hhc2hdLmpzXCIsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcIltuYW1lXS5baGFzaF0uW2V4dF1cIixcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiW25hbWVdLmpzXCIsXG4gICAgICAgIGRpcjogXCJkaXN0XCIsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBSWpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxRQUNQLEVBQUUsS0FBSyxxQkFBcUIsTUFBTSxPQUFPO0FBQUEsUUFDekMsRUFBRSxLQUFLLGNBQWMsTUFBTSxPQUFPO0FBQUEsTUFDcEM7QUFBQSxNQUNBLE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPLENBQUMsY0FBYyxxQkFBcUIsc0JBQXNCO0FBQUEsTUFDakUsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
