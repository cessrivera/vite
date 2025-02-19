import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: "/princessdianerivera.github.io/vite-project/",
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'public/*', dest: '' }
      ]
    })
  ],
});
