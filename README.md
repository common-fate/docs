# docs

Source code for https://docs.commonfate.io.

## Contributing

Our documentation website uses the [Starlight](https://starlight.astro.build) framework. You can run the documentation site locally in order to preview your changes.

To do this, you'll need to install the following dependencies:

- [NodeJS](https://nodejs.org)
- [pnpm](https://pnpm.io/installation)
- [git LFS](https://git-lfs.com)

Git LFS is used for image storage. Ensure that you've followed the [Git LFS getting started guide](https://git-lfs.com) prior to contributing to the repository.

Install dependencies by running:

```
pnpm install
```

Then, start a local development server by running:

```
pnpm run dev
```

The docs website will be available on http://localhost:4321 by default.

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
