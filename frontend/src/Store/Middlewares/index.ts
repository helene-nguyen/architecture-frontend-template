//~ Import modules

//~ Export middlewares
const allMiddlewares: string[] = [];

const getDefaultMiddleware = (getDefaultMiddleware: () => any[]) => getDefaultMiddleware().concat(allMiddlewares);

export default getDefaultMiddleware;
