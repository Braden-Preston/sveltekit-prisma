import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      out: './build'
    }),
    files: {
      assets: 'src/assets',
      routes: 'src/pages',
      lib: 'src/functions'
    },
    vite: {
      resolve: {
        alias: {
          $root: path.resolve('./src'),
          $schemas: path.resolve('./schemas'),
          $components: path.resolve('./src/components')
        }
      }
    }
  }
}

export default config
