const { lazy } = require("react");

const Router = [
  {
    key: "dashboard",
    path: "",
    Component: lazy(() => import("../../page/dashboard")),
    authenticate: true,
  },
];

export default Router;
