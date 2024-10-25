# Nuxt starter template

A Nuxt starter template to initiate a new webapp project.

## Community

You can chat with me on [Mattermost](https://mattermost.tech.orange/diod/messages/@samuel.collin).

## Getting Started

### Prerequisites

Nuxt starter template requires Node >=18

### Installing

Please follow these steps to get a development env running.

```shell
# If you don't have pnpm installed, run:
corepack enable
corepack prepare pnpm@latest --activate
```

```shell
git clone git@gitlab.tech.orange:samuel.collin/nuxt-template.git
cd nuxt-starter
pnpm install
```

### Run a local version for development purpose

Start a local version using the following command:

```shell
pnpm run dev
```

The local version of Nuxt starter template webapp will be available on <http://localhost:3000>

### Linting and formatting

We use [ESLint](https://eslint.org/) for **both linting and formatting**.
You can run `pnpm run lint --fix` to let ESLint formats and lints the code.

We recommend using VS Code along with the ESLint extension.
With the following settings in VS Code's `settings.json`, you can have auto fix and formatting when you save the code you are editing :

```json
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  }
}
```

Since ESLint is already configured to format the code, there is no need to duplicate the functionality with Prettier.

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages, which allows the changelog to be auto-generated based on the commits. Please read the guide through if you aren't familiar with it already.

Only `fix:` and `feat:` types will be presented in the **changelog**.
Others supported types are: `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`

Note that `fix:` and `feat:` are for **actual code changes** (that might affect logic).
For typo or document changes, use `docs:` or `chore:` instead:

- ~~`fix: typo`~~ -> `docs: fix typo`

## Built With

Tools that are used to build your application.

- [Nuxt 3](https://nuxt.com) - The Intuitive Vue Framework
- [Vue 3](https://vuejs.org) - The Progressive JavaScript FrameworkThe with `<script setup>` syntax (composition API)
- [UnoCSS](https://unocss.dev) - The instant on-demand atomic CSS engine.
- 😃 Use icons from any icon sets in Pure CSS, powered by UnoCSS + [Iconify](https://icon-sets.iconify.design/).

## Plugins

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [ColorMode](https://github.com/nuxt-modules/color-mode) - dark and Light mode with auto detection made easy with Nuxt.
- [UnoCSS](https://github.com/unocss/unocss) - the instant on-demand atomic CSS engine.
- [Pinia](https://github.com/vuejs/pinia) - intuitive, type safe, light and flexible Store for Vue.
- [i18n](https://github.com/nuxt-modules/i18n) - internationalization for Nuxt applications.
- [DevTools](https://github.com/nuxt/devtools) - unleash Nuxt Developer Experience.

## Authors

- **[Samuel Collin](https://github.com/nilloq)**

  - Developer

## License

This project is licensed - see the [LICENSE](LICENSE) file for details.
