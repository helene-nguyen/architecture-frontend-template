# Tools and stacks

We use `pnpm` package (stand for _performant_ npm) instead of npm and `vite` for performance optimization.

## Why pnpm

This package uses a single shared package store, reducing disk space usage and speeding up installation. It also provides deterministic builds, preventing version conflicts. Additionally, it supports multiple projects within a monorepo, enhancing development efficiency.

## Why vite

For development, it offers faster build times through an innovative ES module-based bundling approach.

It leverages native browser ESM (ECMAScript Modules) during development, resulting in quicker reloading and hot module replacement. Vite also has simplified configuration and supports out-of-the-box TypeScript, making it more developer-friendly.

## Why Redux Toolkit

For API calls, we use **Redux Toolkit** :

Redux Toolkit and **RTK Query** are often used together to optimize the development experience when working with Redux and managing API data in a Redux store.

Redux Toolkit provides a set of utilities, including the createSlice and createAsyncThunk functions, which simplify the creation of Redux slices and async actions. It helps reduce the amount of boilerplate code typically associated with Redux setup and enables developers to write Redux logic more efficiently.

**RTK Query**, on the other hand, is a data fetching and caching library built on top of Redux Toolkit. It integrates seamlessly with Redux and provides a powerful and opinionated approach to managing API data in the Redux store. **RTK Query** offers automatic caching, smart invalidation, and automatic background refetching, reducing the need for manual data management code.

By using Redux Toolkit and **RTK Query** together, developers can leverage the benefits of both libraries, making Redux development more productive and streamlined while efficiently managing API data in the Redux store.
