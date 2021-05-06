export default function renderRouteConfig(
  routes,
  contextPath,
  handleChildRoutes,
  handleRoutes,
  render
) {
  const children = [];
  const renderRoute = (item, routeContextPath) => {
    const { component, childRoutes, path, options } = item;
    let newContextPath;
    // 拼接路由
    if (/^\//.test(path)) {
      newContextPath = path;
    } else {
      newContextPath = `${routeContextPath}/${path}`;
    }
    // 去掉重复的/
    newContextPath = newContextPath.replace(/\/+/g, "/");
    // 同时存在component && childRoutes的情况
    // 建议将component作为childRoutes的layout
    if (component && childRoutes) {
      const childrenRoutes = renderRouteConfig(
        childRoutes,
        newContextPath,
        handleChildRoutes,
        handleRoutes,
        render
      );
      children.push(
        handleChildRoutes(
          newContextPath,
          component,
          childrenRoutes,
          options
        )
      );
    } else if (component) {
      // 只有compoent属性的情况
      // 直接渲染未路由推入children即可
      children.push(
        handleRoutes(newContextPath, component, options)
      );
    } else if (childRoutes) {
      // 没有component，只有childRoutes的情况
      childRoutes.forEach((r) =>
        renderRoute(r, newContextPath)
      );
    }
  };

  routes.forEach((item) => renderRoute(item, contextPath));

  return render(children);
}
