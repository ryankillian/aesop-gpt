Hi,

I have a blog-esque static site which uses msdsvex.

The site has static and dynamic routes.

The repo is https://github.com/ryankillian/aesop-gpt.git

I have read the excellent https://khromov.se/the-missing-guide-to-understanding-adapter-static-in-sveltekit/

When I run ...

> npm run build

> npm run preview

the website works locally.

When I try to deploy to Vercel I get

```
.svelte-kit/output/server/entries/pages/fable/_slug_/_page.ts.js                8.80 kB
.svelte-kit/output/server/index.js                                             89.06 kB
Run npm run preview to preview your production build locally.
> Using @sveltejs/adapter-static
  Detected Vercel. Please remove adapter-static options to enable zero-config mode
  Wrote site to "build"
  ✔ done
✓ built in 12.18s
Done in 13.21s.
Error: No Output Directory named "public" found after the Build completed. You can configure the Output Directory in your Project Settings.
Learn More: https://vercel.link/missing-public-directory
```

I am using the default Vercel settings.

My svelte.config.js is

```import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({ fallback: '404.html' })
	}
};

export default config;
```

Can anyone help with this?

Do I need to use fetch in my load functions for this type of static site?
