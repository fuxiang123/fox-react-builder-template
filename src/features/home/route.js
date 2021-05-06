import { HomePage } from ".";

export default {
  path: "",
  childRoutes: [
    {
      path: "",
      component: HomePage,
      options: {
        exact: true,
      },
    },
  ],
};
