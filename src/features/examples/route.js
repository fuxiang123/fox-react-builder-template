import Layout from "./Layout";
import TodoList from "./pages/TodoList";
import RedditList from "./pages/RedditList";

export default {
  path: "examples",
  component: Layout,
  childRoutes: [
    {
      path: "redditList",
      component: RedditList,
    },
    {
      path: "todolist",
      component: TodoList,
    },
  ],
};
