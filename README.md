# React Boilerplate

## Introduction

The purpose of this repository is to provide a boilerplate for starting a React project with a clean architecture.

## Folder structure

```sh
├── backend
├── frontend
|  ├── index.html
|  ├── public
|  |  ├── favicon
|  |  ├── manifest.json
|  |  └── robots.txt
|  ├── scripts
|  |  └── create_component.sh
|  ├── src
|  |  ├── App
|  |  |  ├── App.tsx
|  |  |  ├── Components
|  |  |  |  ├── IndexComponents.tsx
|  |  |  |  └── Loader
|  |  |  |     ├── index.tsx
|  |  |  |     ├── Media
|  |  |  |     ├── Style
|  |  |  |     |  ├── main.scss
|  |  |  |     |  └── _theme.scss
|  |  |  |     └── Types
|  |  |  ├── Layout
|  |  |  |  ├── Footer
|  |  |  |  ├── Header
|  |  |  |  └── MainLayout
|  |  |  |     ├── index.tsx
|  |  |  |     ├── Media
|  |  |  |     ├── Style
|  |  |  |     |  ├── main.scss
|  |  |  |     |  └── _theme.scss
|  |  |  |     └── Types
|  |  |  ├── Pages
|  |  |  |  ├── Dashboard
|  |  |  |  |  ├── index.tsx
|  |  |  |  |  ├── Media
|  |  |  |  |  ├── Styles
|  |  |  |  |  |  └── main.scss
|  |  |  |  |  └── Types
|  |  |  |  ├── Home
|  |  |  |  |  ├── index.tsx
|  |  |  |  |  ├── Media
|  |  |  |  |  ├── Styles
|  |  |  |  |  |  └── main.scss
|  |  |  |  |  └── Types
|  |  |  |  ├── IndexPages.tsx
|  |  |  |  ├── Login
|  |  |  |  |  ├── index.tsx
|  |  |  |  |  ├── Media
|  |  |  |  |  ├── Styles
|  |  |  |  |  |  └── main.scss
|  |  |  |  |  └── Types
|  |  |  |  ├── NoPage
|  |  |  |  |  ├── index.tsx
|  |  |  |  |  ├── Media
|  |  |  |  |  ├── Style
|  |  |  |  |  └── Types
|  |  |  |  └── Signup
|  |  |  |     ├── index.tsx
|  |  |  |     ├── Media
|  |  |  |     ├── Styles
|  |  |  |     |  └── main.scss
|  |  |  |     └── Types
|  |  |  └── Utils
|  |  |     ├── i18n
|  |  |     └── Seo
|  |  ├── Assets
|  |  |  ├── fonts
|  |  |  ├── media
|  |  |  └── sass
|  |  ├── Hooks
|  |  |  └── index.ts
|  |  ├── main.tsx
|  |  ├── Routes
|  |  |  ├── index.tsx
|  |  |  └── Routes.tsx
|  |  ├── Store
|  |  |  ├── API
|  |  |  |  ├── authentication.ts
|  |  |  |  └── index.ts
|  |  |  ├── index.ts
|  |  |  ├── Middlewares
|  |  |  |  ├── index.ts
|  |  |  |  └── theme.ts
|  |  |  └── Reducers
|  |  |     ├── Features
|  |  |     |  └── Auth
|  |  |     |     └── index.ts
|  |  |     ├── index.ts
|  |  |     └── Payload
|  |  |        └── index.ts
|  |  └── Types
|  |     ├── custom.d.ts
|  |     ├── GlobalTypes
|  |     └── vite-env.d.ts
|  ├── tsconfig.json
|  ├── tsconfig.node.json
|  ├── vite.config.ts
├── Makefile
├── README.md
```

## How to start ?

- Clone the repository

- Install dependencies

```sh
cd ./frontend
# common use with npm
npm install
# you can use pnpm for performance & optimization
npm install --global pnpm
pnpm install
```

(We explain here advantages of using pnpm and vite: [Tools and stack in details](./__docs__/tools-stack.md))

- Launch the server application for development environment

```sh
# common
npm run dev
# pnpm
pnpm run dev
```

## Makefile usage

To use Make, you need to install it or ensure that it is installed

```sh
# check if it installed
make --version

# or install it (Linux)
sudo apt install make
```

- Launch development environment

```sh
    make dev
```

---

### Sources

- [Packages manager: npm, pnpm,yarn](https://www.alsacreations.com/article/lire/1907-Les-gestionnaires-de-paquets-pour-Node--npm-yarn-pnpm.html#:~:text=pnpm%20se%20dit%202%20fois,c'est%20rapide%20et%20simple.)
